Public Class IVACalculoFormulario
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

        Dim pTotalIVA As Byte
        Dim selectedValue As String = ComboBox1.SelectedItem.ToString()
        errorLbl.Text = ""

        If (selectedValue = "general") Then
            pTotalIVA = 21
        ElseIf (selectedValue = "reducido") Then
            pTotalIVA = 10
        ElseIf (selectedValue = "productos basicos") Then
            pTotalIVA = 5
        End If

        Try
            If (CDbl(TextBox1.Text) > 0) Then
                Dim c As New CalculoIVA_DLL.CalculoIVA(CDbl(TextBox1.Text), pTotalIVA)
                TextBox2.Text = c.TotalSinIVA()
                TextBox3.Text = c.IVA()
            Else
                TextBox2.Text = ""
                TextBox3.Text = ""
                errorLbl.Text = "Se debe introducir un valor positivo."
            End If
        Catch ex As Exception
            TextBox2.Text = ""
            TextBox3.Text = ""
            errorLbl.Text = "Se debe introducir un valor numérico."
        End Try


    End Sub

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        ComboBox1.SelectedIndex = 0
    End Sub

End Class
