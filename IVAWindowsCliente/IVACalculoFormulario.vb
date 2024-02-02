Public Class IVACalculoFormulario
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim pTotalIVA As Byte
        Dim selectedValue As String = ComboBox1.SelectedItem.ToString()

        If (selectedValue = "general") Then
            pTotalIVA = 21
        ElseIf (selectedValue = "reducido") Then
            pTotalIVA = 10
        ElseIf (selectedValue = "productos basicos") Then
            pTotalIVA = 5
        End If
        Dim c As New CalculoIVA_DLL.CalculoIVA(CDbl(TextBox1.Text), pTotalIVA)

        TextBox2.Text = c.TotalSinIVA()
        TextBox3.Text = c.IVA()
    End Sub

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        ComboBox1.SelectedIndex = 0
    End Sub
End Class
