Imports System.Data.SqlClient
Public Class WebForm8
    Inherits System.Web.UI.Page

    Dim dstAsignaturas As DataSet
    Dim dstTrabajos As DataSet
    Dim dapAsignaturas As SqlDataAdapter
    Dim dapTrabajos As SqlDataAdapter
    Dim tblAsignaturas As DataTable
    Dim tblTrabajos As DataTable
    Dim idUsuario As String


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        idUsuario = Session("loggedUserEmail").ToString()
        If Page.IsPostBack Then
            dstAsignaturas = Session("datosAsignaturas")
            dstTrabajos = Session("datosTrabajos")
        Else
            AccesoDatos.AccesoDatos.Conectar()
            dapAsignaturas = AccesoDatos.AccesoDatos.AlumnoMatriculadoAsignaturasAdaptadorObtener(idUsuario)
            dstAsignaturas = New DataSet()
            dapAsignaturas.Fill(dstAsignaturas, "KlasekoTaldeak")

            dapTrabajos = AccesoDatos.AccesoDatos.TrabajosGenericosExplotacionAdaptadorObtener()
            dstTrabajos = New DataSet()
            dapTrabajos.Fill(dstTrabajos, "LanGenerikoak")
            AccesoDatos.AccesoDatos.CerrarConexion()

            tblAsignaturas = dstAsignaturas.Tables("KlasekoTaldeak")
            asignaturasDDL.DataTextField = "irakasgaiKodea"
            asignaturasDDL.DataValueField = "irakasgaiKodea"
            asignaturasDDL.DataSource = tblAsignaturas
            asignaturasDDL.DataBind()

            Session("datosAsignaturas") = dstAsignaturas
            Session("dapAsignaturas") = dapAsignaturas
            Session("datosTrabajos") = dstTrabajos
        End If
    End Sub

    Protected Sub asignaturasDDL_SelectedIndexChanged(sender As Object, e As EventArgs) Handles asignaturasDDL.SelectedIndexChanged

    End Sub
End Class