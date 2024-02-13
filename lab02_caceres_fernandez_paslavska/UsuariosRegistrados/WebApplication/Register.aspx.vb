Public Class WebForm3
    Inherits System.Web.UI.Page

    Dim tipoUsuElegido As Boolean

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        tipoUsuElegido = False
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles RegisterBtn.Click
        Dim allFilled As Boolean = True

        If String.IsNullOrWhiteSpace(EmailTxt.Text) Then

        End If
    End Sub

    Protected Sub StudentRBtn_CheckedChanged(sender As Object, e As EventArgs) Handles StudentRBtn.CheckedChanged
        If StudentRBtn.Checked Then
            TeacherRBtn.Checked = False
            tipoUsuElegido = True
        End If
    End Sub

    Protected Sub TeacherRBtn_CheckedChanged(sender As Object, e As EventArgs) Handles TeacherRBtn.CheckedChanged
        If TeacherRBtn.Checked Then
            StudentRBtn.Checked = False
            tipoUsuElegido = True
        End If
    End Sub
End Class