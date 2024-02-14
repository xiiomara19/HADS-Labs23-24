Imports System.Data.SqlClient
Public Class WebForm4
    Inherits System.Web.UI.Page
    Dim da As AccesoDatos.AccesoDatos
    Dim email As String
    Dim pswd As String

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        email = Session("loggedUserEmail").ToString()
        da = AccesoDatos.AccesoDatos.getInstancia()
        obtenerContraseña()
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If String.IsNullOrWhiteSpace(PassField.Text) Then
            errPswdAntg.Text = "¡Campo Requerido!"
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            errPswd.Text = ""

        ElseIf String.IsNullOrWhiteSpace(PswdField1.Text) Then
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = "¡Campo Requerido!"
            errPswdNuevo2.Text = ""
            errPswd.Text = ""

        ElseIf String.IsNullOrWhiteSpace(PswdField2.Text) Then
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = "¡Campo Requerido!"
            errPswd.Text = ""

        ElseIf pswd <> PassField.Text Then
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            errPswd.Text = "Se ha insertado una contraseña incorrecta."

        ElseIf PswdField1.Text <> PswdField2.Text Then
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            errPswd.Text = "Las nuevas contraseñas no coinciden."

        ElseIf PassField.Text = PswdField1.Text Then
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            errPswd.Text = "La contraseña a modificar es la misma que la contraseña antigua."

        Else
            cambiarContraseña()
            Button1.Enabled = False
        End If

    End Sub

    Private Sub obtenerContraseña()
        da.Conectar()
        Dim usuario As SqlDataReader = da.ObtenerUsuarios(email)
        If (usuario.HasRows) Then
            usuario.Read()
            pswd = usuario.GetString(11)
        End If
        da.CerrarConexion()
        usuario.Close()
    End Sub
    Private Sub cambiarContraseña()
        da.Conectar()
        Dim numregs As Integer = da.ModificarContraseñaUsuario(email, PswdField1.Text)
        If numregs < 0 Then
            errPswd.Text = "No se ha podido cambiar la contraseña."
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            correctMsj.Text = ""
        Else
            errPswdAntg.Text = ""
            errPswdNuevo1.Text = ""
            errPswdNuevo2.Text = ""
            errPswd.Text = ""
            correctMsj.Text = "Se ha actualizado la contraseña correctamente."
        End If
        da.CerrarConexion()
    End Sub

    Protected Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click

        errPswdAntg.Text = ""
        errPswdNuevo1.Text = ""
        errPswdNuevo2.Text = ""
        errPswd.Text = ""
        correctMsj.Text = ""
        PassField.Text = ""
        PswdField1.Text = ""
        PswdField2.Text = ""
        Response.Redirect("Menu.aspx")
    End Sub
End Class