Public Class IVACalculoFormulario
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim c As New CalculoIVA_DLL.CalculoIVA
        Dim outValue As Double
        Dim prueba As String

        prueba = ComboBox1.SelectedItem
        ' Validate that TextBox1.Text is a valid number
        TextBox2.Text = c.TotalSinIVA(CDbl(TextBox1.Text), ComboBox1.SelectedItem)
        TextBox3.Text = c.CalcularIVA(CDbl(TextBox1.Text), ComboBox1.SelectedItem)

    End Sub

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

    End Sub
End Class
