Public Class WebForm9
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        TextBox1.Text = Session("loggedUserEmail").ToString()
        Session("datosAsignaturas").ToString()
        TextBox2.Text = Request.QueryString("tarea")
        'TextBox3.Text = Request.QueryString("horas")
        CrearBtn.Enabled = True

        'Response.Redirect("~//Registro/Alumnado/InstanciarTrabajo.aspx" & "?Codigo=" & x & "?Horas=" &)
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles CrearBtn.Click
        ReiniciarErrores()
        Dim valor As Integer
        If String.IsNullOrEmpty(TextBox4.Text) Then
            errorMessage.Text = "Debe insertar el número de horas efectivas."
        ElseIf Not Int32.TryParse(TextBox4.Text, valor) Then
            errorMessage.Text = "El número de horas efectivas debe ser un número entero. "
        ElseIf CInt(TextBox4.Text) < 0 Then
            errorMessage.Text = "El número de horas efectivas debe ser positivo."
        Else
            correctMessage.Text = "Se ha instanciado correctamente su trabajo"
            CrearBtn.Enabled = False
        End If
    End Sub

    Protected Sub ReiniciarErrores()
        errorMessage.Text = ""
        correctMessage.Text = ""
    End Sub

End Class