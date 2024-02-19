Imports System.Data.SqlClient

Public Class verificar
    Inherits System.Web.UI.Page

    Dim idUser As String
    Dim verifNum As Integer

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        errVerificaciónLbl.Text = ""
        infoLbl.Text = "Pulsa el botón 'Confirmar' para confirmar el registro"

    End Sub

    Protected Sub ConfirmarBtn_Click(sender As Object, e As EventArgs) Handles ConfirmarBtn.Click
        errVerificaciónLbl.Text = ""
        idUser = Request.QueryString("erab")
        verifNum = CInt(Request.QueryString("egZenb"))
        If (verificarUsuario() <> -1) Then
            infoLbl.Text = "Se ha registrado correctamente."
            volverBtn.Enabled = True
        Else
            errVerificaciónLbl.Text = "No se ha podido registrar al usuario, los datos son incorrectos."
        End If

    End Sub

    Protected Function verificarUsuario() As Integer
        Dim verificado As Integer = -1
        Try
            AccesoDatos.AccesoDatos.getInstancia().Conectar()
            Dim reader As SqlDataReader = AccesoDatos.AccesoDatos.getInstancia().verificarUsuario(idUser, CInt(verifNum))
            Dim hay As Boolean = reader.HasRows
            reader.Close()
            If (hay) Then
                verificado = AccesoDatos.AccesoDatos.getInstancia().ComprobarUsuario(idUser)
            End If
            AccesoDatos.AccesoDatos.getInstancia().CerrarConexion()

        Catch ex As Exception
            errVerificaciónLbl.Text = ex.Message
        End Try

        Return verificado
    End Function

    Protected Sub volverBtn_Click(sender As Object, e As EventArgs) Handles volverBtn.Click
        Response.Redirect("~/Login.aspx")
    End Sub
End Class