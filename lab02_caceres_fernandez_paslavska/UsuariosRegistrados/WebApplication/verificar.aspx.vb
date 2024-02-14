Imports System.Data.SqlClient

Public Class verificar
    Inherits System.Web.UI.Page

    Dim da As AccesoDatos.AccesoDatos
    Dim id As String
    Dim verifNum As Integer

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        da = AccesoDatos.AccesoDatos.getInstancia()
        errVerificaciónLbl.Text = ""

    End Sub

    Protected Sub ConfirmarBtn_Click(sender As Object, e As EventArgs) Handles ConfirmarBtn.Click
        errVerificaciónLbl.Text = ""
        id = Request.QueryString("erab")
        verifNum = CInt(Request.QueryString("egZenb"))
        If (verificarUsuario() <> -1) Then
            Response.Redirect("~/Menu.aspx")
        Else
            errVerificaciónLbl.Text = "No se ha podido registrar al usuario, los datos son incorrectos."
        End If

    End Sub

    Protected Function verificarUsuario() As Integer
        Dim verificado As Integer = -1
        Try
            AccesoDatos.AccesoDatos.getInstancia().Conectar()
            Dim reader As SqlDataReader = AccesoDatos.AccesoDatos.getInstancia().verificarUsuario(id, CInt(verifNum))
            If (reader.HasRows) Then
                verificado = AccesoDatos.AccesoDatos.getInstancia().ComprobarUsuario(id)
            End If
            AccesoDatos.AccesoDatos.getInstancia().CerrarConexion()
        Catch ex As Exception
            errVerificaciónLbl.Text = ex.Message
        End Try

        Return verificado
    End Function
End Class