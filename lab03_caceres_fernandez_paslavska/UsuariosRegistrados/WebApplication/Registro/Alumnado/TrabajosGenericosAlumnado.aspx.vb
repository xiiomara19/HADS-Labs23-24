Imports System.Data.SqlClient
Public Class WebForm8
    Inherits System.Web.UI.Page

    Dim dstAsignaturas As DataSet
    Dim dstTrabajos As DataSet
    Dim dapAsignaturas As SqlDataAdapter
    Dim dapTrabajos As SqlDataAdapter
    Dim tblAsignaturas As DataTable
    Dim tblTrabajos As DataTable
    Dim dvTrabajos As DataView

    Dim idUsuario As String
    Dim asignaturaElegida As String
    Dim tareaElegida As String
    Dim horasTarea As String


    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        idUsuario = Session("loggedUserEmail").ToString()
        asignaturaElegida = asignaturasDDL.SelectedValue.ToString
        If Page.IsPostBack Then
            dstAsignaturas = Session("datosAsignaturas")
            dstTrabajos = Session("datosTrabajos")
            dapAsignaturas = Session("dapAsignaturas")
            dvTrabajos = Session("vistaTrabajos")
            tblTrabajos = Session("tablaTrabajos")
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

    Protected Sub verBtn_Click(sender As Object, e As EventArgs) Handles verBtn.Click
        dstTrabajos = Session("datosTrabajos")
        tblTrabajos = dstTrabajos.Tables("LanGenerikoak")
        dvTrabajos = New DataView(tblTrabajos)
        dvTrabajos.Sort = "kodea ASC"
        dvTrabajos.RowFilter = $"irakasgaiKodea = '{asignaturasDDL.SelectedValue}' AND ustiapenean = 1"
        TareasGV.DataSource = dvTrabajos
        TareasGV.DataBind()
        TareasGV.Visible = True
        Session("vistaTrabajos") = dvTrabajos
        Session("tablaTrabajos") = tblTrabajos
    End Sub

    Protected Sub caractTareasCBL_SelectedIndexChanged(sender As Object, e As EventArgs) Handles caractTareasCBL.SelectedIndexChanged
        If caractTareasCBL.Items.Item(1).Selected Then
            TareasGV.Columns.Item(2).Visible = True
        Else
            TareasGV.Columns.Item(2).Visible = False
        End If

        If caractTareasCBL.Items.Item(2).Selected Then
            TareasGV.Columns.Item(3).Visible = True
        Else
            TareasGV.Columns.Item(3).Visible = False
        End If

        If caractTareasCBL.Items.Item(3).Selected Then
            TareasGV.Columns.Item(4).Visible = True
        Else
            TareasGV.Columns.Item(4).Visible = False
        End If
    End Sub

    Protected Sub TareasGV_SelectedIndexChanged(sender As Object, e As EventArgs) Handles TareasGV.SelectedIndexChanged
        tblAsignaturas = Session("tablaAsignaturas")
        tareaElegida = TareasGV.SelectedDataKey.Value.ToString
        horasTarea = tblTrabajos.Rows(TareasGV.SelectedIndex).Item(3).ToString
        Response.Redirect("InstanciarTrabajo.aspx?tarea=" & tareaElegida & "&horas=" & horasTarea)
    End Sub

End Class