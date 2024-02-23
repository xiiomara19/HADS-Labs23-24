Imports System.Data.SqlClient
Public Class WebForm11
    Inherits System.Web.UI.Page

    Dim dapIncluirTrabajos As SqlDataAdapter
    Dim dstIncluirTrabajos As DataSet

    Dim fila As DataRow

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Page.IsPostBack Then
            dapIncluirTrabajos = Session("dapIncluirTrabajos")
            dstIncluirTrabajos = Session("dstIncluirTrabajos")
        Else
            Try
                AccesoDatos.AccesoDatos.Conectar()
                dapIncluirTrabajos = AccesoDatos.AccesoDatos.ObtenerAdaptadorTrabajosGenericos()
                dstIncluirTrabajos = New DataSet()
                dapIncluirTrabajos.Fill(dstIncluirTrabajos, "LanGenerikoak")
                AccesoDatos.AccesoDatos.CerrarConexion()
            Catch ex As Exception
                errorConLbl.Text = ex.Message
            End Try

            Session("dapIncluirTrabajos") = dapIncluirTrabajos
            Session("dstIncluirTrabajos") = dstIncluirTrabajos

        End If
    End Sub

    Protected Sub AnadirBtn_Click(sender As Object, e As EventArgs) Handles AnadirBtn.Click
        Dim code As String = codigoTxt.Text
        Dim description As String = descripcionTxt.Text
        Dim subject As String = asignaturasDDL.SelectedValue
        Dim hours As String = horasTxt.Text
        Dim type As String = tipoTrabajoDDL.SelectedValue

        dapIncluirTrabajos = Session("dapIncluirTrabajos")
        dstIncluirTrabajos = Session("dstIncluirTrabajos")
        fila = dstIncluirTrabajos.Tables(0).NewRow()
        fila("kodea") = code
        fila("deskribapena") = description
        fila("irakasgaiKodea") = subject
        fila("aurreikusitakoOrduak") = hours
        fila("ustiapenean") = True
        fila("lanMota") = type

        dstIncluirTrabajos.Tables(0).Rows.Add(fila)
        Session("dstIncluirTrabajos") = dstIncluirTrabajos
        Dim comando As New SqlCommand()
        Try
            comando.CommandText = "INSERT INTO LanGenerikoak (kodea, deskribapena, irakasgaiKodea, aurreikusitakoOrduak, ustiapenean, lanMota) VALUES ('" & code & "', '" & description & "', '" & subject & "', '" & hours & "', 1, '" & type & "')"
            comando.Connection = New SqlConnection("Data Source=tcp:hads2324.database.windows.net,1433;" &
                                                         "Initial Catalog=lab3BD;Persist Security Info=True;" &
                                                         "User ID=efernandez200@ikasle.ehu.eus@hads2324;Password=hads-2324")
            dapIncluirTrabajos.InsertCommand = comando
            dapIncluirTrabajos.Update(dstIncluirTrabajos)
        Catch ex As Exception
            errorConLbl.Text = ex.Message
        End Try

    End Sub
End Class