Imports System.Data.SqlClient
Public Class WebForm9
    Inherits System.Web.UI.Page
    Dim dapTrabajos As SqlDataAdapter
    Dim dstTrabajos As DataSet
    Dim tblTrabajos As DataTable
    Dim dvTrabajos As DataView

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        TextBox1.Text = Session("loggedUserEmail").ToString()
        Session("datosAsignaturas").ToString()
        TextBox2.Text = Request.QueryString("tarea")
        'TextBox3.Text = Request.QueryString("horas")
        CrearBtn.Enabled = True
        If Page.IsPostBack Then
            dstTrabajos = Session("instanciarTrabajo")
        Else
            AccesoDatos.AccesoDatos.Conectar()
            dapTrabajos = AccesoDatos.AccesoDatos.ObtenerAdaptadorTareasAlumnado(Session("loggedUserEmail").ToString())
            dstTrabajos = New DataSet()
            dapTrabajos.Fill(dstTrabajos, "IkasleLanak")
            AccesoDatos.AccesoDatos.CerrarConexion()
            tblTrabajos = dstTrabajos.Tables("IkasleLanak")
            dvTrabajos = New DataView(tblTrabajos)
            TareasGV.DataSource = dvTrabajos
            TareasGV.DataBind()
            Session("instanciarTrabajo") = dstTrabajos
        End If

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles CrearBtn.Click
        ReiniciarErrores()
        Dim valor As Integer
        If String.IsNullOrEmpty(TextBox4.Text) Then
            errorMessage.Text = "Debe insertar el número de horas efectivas."
        ElseIf Not Int32.TryParse(TextBox4.Text, valor) Then
            errorMessage.Text = "El número de horas efectivas debe ser un número entero. "
        ElseIf CInt(TextBox4.Text) < 0 Then
            errorMessage.Text = "El número de horas efectivas debe ser positivo."
        Else
            dstTrabajos = Session("instanciarTrabajo")
            tblTrabajos = dstTrabajos.Tables("IkasleLanak")
            dvTrabajos = New DataView(tblTrabajos)
            TareasGV.DataSource = dvTrabajos
            TareasGV.DataBind()

            If (AccesoDatos.AccesoDatos.cambiarInstanciado(Request.QueryString("tarea")) > 0) Then
                correctMessage.Text = "Se ha instanciado correctamente su trabajo"
                CrearBtn.Enabled = False
            Else
                errorMessage.Text = "No se ha podido instanciar tu trabajo"
            End If
        End If
    End Sub

    Protected Sub ReiniciarErrores()
        errorMessage.Text = ""
        correctMessage.Text = ""
    End Sub

End Class