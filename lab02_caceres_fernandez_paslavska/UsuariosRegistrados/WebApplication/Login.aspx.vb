Imports System.Data.SqlClient

Public Class WebForm1
    Inherits System.Web.UI.Page

    Dim da As AccesoDatos.AccesoDatos
    Dim email As Boolean = 0
    Dim pass As String = ""


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Session("loggedUserEmail") = ""
        da = AccesoDatos.AccesoDatos.getInstancia()
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        If String.IsNullOrWhiteSpace(emailField.Text) Then
            errEmail.Text = "Campo Requerido!"
            errPass.Text = ""
            errEmail.ForeColor = System.Drawing.Color.Red
        ElseIf String.IsNullOrWhiteSpace(PassField.Text) Then
            errPass.Text = "Campo Requerido!"
            errEmail.Text = ""
            errPass.ForeColor = System.Drawing.Color.Red
        Else
            errEmail.Text = ""
            errPass.Text = ""
            Message.Text = ""
            Check_Email_Password()
            If (Not email) Then
                Message.Text = "Dirección de correo no registrada."
            Else
                If (pass.Equals(PassField.Text)) Then

                    Server.Transfer("Menu.aspx")
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
        da.Conectar()
        Dim reader As SqlDataReader = da.ObtenerUsuarios(emailField.Text)

        If (reader.HasRows) Then
            reader.Read()
            email = 1
            pass = reader.GetString(11)
        End If
        da.CerrarConexion()
        'Console.WriteLine(pass, email)
        reader.Close()
    End Sub
End Class