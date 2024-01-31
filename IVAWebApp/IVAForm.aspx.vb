Public Class IVAForm
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub CalcularBtn_Click(sender As Object, e As EventArgs) Handles CalcularBtn.Click

        Try
            Dim c As New CalculoIVA_DLL.CalculoIVA(TotalInput.Value, tipoIVAList.SelectedValue)
            PrecioBaseTxtBox.Text = c.TotalSinIVA
            IVAAplicadoTxtBox.Text = c.CalcularIVA
        Catch ex As Exception
            ErrorLbl.Text = "Algo ha ido mal"
        End Try



    End Sub
End Class