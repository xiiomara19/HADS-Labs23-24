Public Class WebForm3
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click

    End Sub

    Protected Sub RadioButton1_CheckedChanged(sender As Object, e As EventArgs) Handles Alumno.CheckedChanged
        If Alumno.Checked Then
            Profesor.Checked = False

        End If
    End Sub

    Protected Sub Profesor_CheckedChanged(sender As Object, e As EventArgs) Handles Profesor.CheckedChanged
        If Profesor.Checked Then
            Alumno.Checked = False

        End If
    End Sub
End Class