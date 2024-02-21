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
        TextBox3.Text = Request.QueryString("horas")
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
            Session("adaptador") = dapTrabajos
        End If

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles CrearBtn.Click
        ReiniciarErrores()
        Dim valor As Integer
        Dim bldTrabajos As New SqlCommandBuilder(Session("adaptador"))
        If String.IsNullOrEmpty(TextBox4.Text) Then
            errorMessage.Text = "Debe insertar el número de horas efectivas."
        ElseIf Not Int32.TryParse(TextBox4.Text, valor) Then
            errorMessage.Text = "El número de horas efectivas debe ser un número entero. "
        ElseIf CInt(TextBox4.Text) < 0 Then
            errorMessage.Text = "El número de horas efectivas debe ser positivo."
        Else
            dstTrabajos = Session("instanciarTrabajo")
            tblTrabajos = dstTrabajos.Tables("IkasleLanak")
            Dim rowTrabajos As DataRow = tblTrabajos.NewRow()
            rowTrabajos("email") = TextBox1.Text
            rowTrabajos("lanGenerikoarenKodea") = TextBox2.Text
            rowTrabajos("aurreikusitakoOrduak") = TextBox3.Text
            rowTrabajos("benetakoOrduak") = TextBox4.Text
            tblTrabajos.Rows.Add(rowTrabajos)
            dvTrabajos = New DataView(tblTrabajos)
            TareasGV.DataSource = dvTrabajos
            TareasGV.DataBind()
            dapTrabajos = Session("adaptador")
            Try
                dapTrabajos.Update(dstTrabajos, "IkasleLanak")
                dstTrabajos.AcceptChanges()
                correctMessage.Text = "Se ha instanciado correctamente su trabajo"
                CrearBtn.Enabled = False
            Catch ex As Exception
                errorMessage.Text = "No se puede volver a instanciar un mismo trabajo."
                CrearBtn.Enabled = False
            End Try

        End If
    End Sub

    Protected Sub ReiniciarErrores()
        errorMessage.Text = ""
        correctMessage.Text = ""
    End Sub

End Class