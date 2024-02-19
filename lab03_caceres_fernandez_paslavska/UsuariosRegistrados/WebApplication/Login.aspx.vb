Imports System.Data.SqlClient

Public Class LoginFormLab3
    Inherits System.Web.UI.Page

    Dim da As AccesoDatos.AccesoDatos
    Dim email As Boolean = 0
    Dim pass As String = ""
    Dim egiaztatua As Boolean = False
    Dim pattern As String = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Session("loggedUserEmail") = ""
        Session("Inicio") = "No"
        da = AccesoDatos.AccesoDatos.getInstancia()
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        If String.IsNullOrWhiteSpace(emailField.Text) Then
            errEmail.Text = "¡Campo Requerido!"
            errPass.Text = ""
            errEmail.ForeColor = System.Drawing.Color.Red
        ElseIf Not IsValidEmail(emailField.Text) Then
            errEmail.Text = "No es un email válido."
            errPass.Text = ""
            errEmail.ForeColor = System.Drawing.Color.Red
        ElseIf String.IsNullOrWhiteSpace(PassField.Text) Then
            errPass.Text = "¡Campo Requerido!"
            errEmail.Text = ""
            errPass.ForeColor = System.Drawing.Color.Red
        Else
            errEmail.Text = ""
            errPass.Text = ""
            Message.Text = ""
            Check_Email_Password()
            If (Not email) Then
                Message.Text = "Dirección de correo no registrada."

            ElseIf (Not (egiaztatua)) Then
                Message.Text = "Usuario no esta registrado correctamente"
            Else
                If (pass.Equals(PassField.Text)) Then
                    If (Session("loggedUserEmail")).ToString.Contains("@ikasle.ehu.eus") Then
                        'Server.Transfer("~/Registro/Alumnado/Alumnos.aspx")
                        Response.Redirect("~/Registro/Alumnado/Alumnos.aspx")
                    Else
                        'Server.Transfer("~/Registro/Profesorado/Profesores.aspx")
                        Response.Redirect("~/Registro/Profesorado/Profesores.aspx")
                    End If

                Else
                    Message.Text = "Password incorrecto."

                End If

            End If
        End If


    End Sub


    Protected Sub Email_TextChanged(sender As Object, e As EventArgs) Handles emailField.TextChanged

        Session("loggedUserEmail") = emailField.Text
        Check_Email_Password()


    End Sub

    Private Sub Check_Email_Password()
        Try
            da.Conectar()
            Dim reader As SqlDataReader = da.ObtenerUsuarios(emailField.Text)

            If (reader.HasRows) Then
                reader.Read()
                email = 1
                pass = reader.GetString(11)
                egiaztatua = reader.GetBoolean(7)
            End If
            da.CerrarConexion()
            reader.Close()
        Catch ex As Exception
            Message.Text = ex.Message
        End Try

        'Console.WriteLine(pass, email)

    End Sub

    Protected Function IsValidEmail(email As String) As Boolean
        Dim match As Match = Regex.Match(email, pattern)
        Return match.Success
    End Function

End Class