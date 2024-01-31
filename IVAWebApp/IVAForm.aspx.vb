Public Class IVAForm
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub CalcularBtn_Click(sender As Object, e As EventArgs) Handles CalcularBtn.Click
        Dim c As New CalculoIVA_DLL.CalculoIVA
        Dim precioBase As Double


    End Sub
End Class