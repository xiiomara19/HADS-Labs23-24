﻿Public Class IVAForm
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub CalcularBtn_Click(sender As Object, e As EventArgs) Handles CalcularBtn.Click
        ErrorLbl.Text = ""
        Try
            If (TotalInput.Value > 0) Then
                Dim c As New CalculoIVA_DLL.CalculoIVA(TotalInput.Value, tipoIVAList.SelectedValue)
                PrecioBaseTxtBox.Text = c.TotalSinIVA()
                IVAAplicadoTxtBox.Text = c.IVA()
            Else
                PrecioBaseTxtBox.Text = ""
                IVAAplicadoTxtBox.Text = ""
                ErrorLbl.Text = "Se debe introducir un valor positivo."
            End If

        Catch ex As Exception
            PrecioBaseTxtBox.Text = ""
            IVAAplicadoTxtBox.Text = ""
            ErrorLbl.Text = "Se debe introducir un valor numérico."
        End Try



    End Sub
End Class