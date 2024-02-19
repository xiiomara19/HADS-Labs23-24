Public Class WebForm12
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Session("Modificar") = "Alumno"
    End Sub

End Class