Imports System.Data.SqlClient

Public Class WebForm6
    Inherits System.Web.UI.Page

    Dim da As AccesoDatos.AccesoDatos
    Dim email As Boolean = 0

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        da = AccesoDatos.AccesoDatos.getInstancia()

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Response.Redirect("/Login.aspx")
    End Sub

    Protected Sub validarEm_Click(sender As Object, e As EventArgs) Handles validarEm.Click
        pass.Text = ""
        errResp.Text = ""
        errorEmail.Text = ""
        If String.IsNullOrWhiteSpace(emailField.Text) Then
            errEmail1.Text = "Campo Requerido!"
            errEmail1.ForeColor = System.Drawing.Color.Red

        Else
            errEmail1.Text = ""
            Session("loggedUserEmail") = emailField.Text
            Check_Email()
            If Not (email) Then
                errEmail1.Text = "Dirección de correo no registrada."
            Else
                Dar_Pregunta()

            End If


        End If

    End Sub

    Private Sub Check_Email()
        da.Conectar()
        Dim reader As SqlDataReader = da.ObtenerUsuarios(emailField.Text)

        If (reader.HasRows) Then
            reader.Read()
            email = 1
        End If
        da.CerrarConexion()
        'Console.WriteLine(pass, email)
        reader.Close()
    End Sub

    Private Sub Dar_Pregunta()
        'Dim userEmail As String = Session("loggedUserEmail").ToString()
        da.Conectar()
        Dim reader As SqlDataReader = da.ObtenerUsuarios(emailField.Text)

        If (reader.HasRows) Then
            reader.Read()
            email = 1
            pregunta.Text = reader.GetString(3)

        End If
        da.CerrarConexion()
        'Console.WriteLine(pass, email)
        reader.Close()
    End Sub

    Protected Sub comprobar_Click(sender As Object, e As EventArgs) Handles comprobar.Click
        pass.Text = ""
        errEmail1.Text = ""
        errorEmail.Text = ""
        errResp.Text = ""
        If Session("loggedUserEmail") IsNot Nothing AndAlso Not String.IsNullOrEmpty(Session("loggedUserEmail").ToString()) Then
            ' Do something because Session("loggedUserEmail") is not null or empty
            Dim userEmail As String = Session("loggedUserEmail").ToString()
            If String.IsNullOrWhiteSpace(fieldResp.Text) Then
                errResp.Text = "Campo Requerido!"
            Else
                ValidarRespuesta()
            End If
        Else
            errorEmail.Text = "Tienes que introducir email valido y pulsar al boton 'Validat email'."


        End If
    End Sub

    Private Sub ValidarRespuesta()
        Dim respuestabd As String
        da.Conectar()
        Dim reader As SqlDataReader = da.ObtenerUsuarios(emailField.Text)

        If (reader.HasRows) Then
            reader.Read()

            respuestabd = reader.GetString(4)
            If respuestabd.Equals(fieldResp.Text) Then
                pass.Text = reader.GetString(11)
            Else
                errorEmail.Text = "Respuesta incorrecta"
            End If
        End If
        da.CerrarConexion()
        reader.Close()

    End Sub
End Class