Imports System.Data.SqlClient
Public Class WebForm8
    Inherits System.Web.UI.Page

    Dim dstAsignaturas As DataSet
    Dim dapAsignaturas As SqlDataAdapter
    Dim tblAsignaturas As DataTable
    Dim idUsuario As String


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        idUsuario = Session("loggedUserEmail").ToString()
        If Page.IsPostBack Then
            dstAsignaturas = Session("datosAsignaturas")
        Else
            AccesoDatos.AccesoDatos.Conectar()
            dapAsignaturas = AccesoDatos.AccesoDatos.AlumnoMatriculadoAsignaturasAdaptadorObtener(idUsuario)
            dstAsignaturas = New DataSet()
            dapAsignaturas.Fill(dstAsignaturas)
            AccesoDatos.AccesoDatos.CerrarConexion()

            asignaturasDDL.DataTextField = "irakasgaiKodea"
            asignaturasDDL.DataSource = dstAsignaturas
            asignaturasDDL.DataBind()



            Session("datosAsignaturas") = dstAsignaturas
            Session("dapAsignaturas") = dapAsignaturas
        End If
    End Sub

    Protected Sub asignaturasDDL_SelectedIndexChanged(sender As Object, e As EventArgs) Handles asignaturasDDL.SelectedIndexChanged

    End Sub
End Class