Public Class WebForm1
    Inherits System.Web.UI.Page


    Protected Sub Page_Load1(sender As Object, e As EventArgs) Handles Me.Load
        Session("Modificar") = "Profesor"
    End Sub
End Class