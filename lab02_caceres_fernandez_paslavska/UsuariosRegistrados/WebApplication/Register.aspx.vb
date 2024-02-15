Imports System.Drawing

Public Class WebForm3
    Inherits System.Web.UI.Page

    Private Shared tipoUsuElegido As Boolean
    Private Shared allFilled As Boolean
    Dim da As AccesoDatos.AccesoDatos
    Dim pattern As String = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"

    Dim Temail As String
    Dim TName As String
    Dim TlastName As String
    Dim Tquestion As String
    Dim Tanswer As String
    Dim Tna As Integer
    Dim TnumVerificacion As Long
    Dim Tgroup As String
    Dim TsubGroup As String
    Dim Tpass As String
    Dim Trol As String

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        tipoUsuElegido = False
        allFilled = True
        reiniciarErrores()
    End Sub

    Protected Sub Button1_Click(sender As Object, e As EventArgs) Handles RegisterBtn.Click
        allFilled = True
        reiniciarErrores()
        comprobarCamposRellenos()

        If allFilled Then
            Temail = EmailTxt.Text
            TName = NameTxt.Text
            TlastName = LastNameTxt.Text
            Tquestion = QuestionTxt.Text
            Tanswer = AnswerTxt.Text
            Tgroup = GroupCodeTxt.Text
            TsubGroup = CodeSubgroupTxt.Text
            Tpass = PasswordTxt.Text
            If (StudentRBtn.Checked) Then
                Trol = StudentRBtn.Text
            Else
                Trol = TeacherRBtn.Text
            End If
            Tna = 0
            Randomize()
            TnumVerificacion = CLng(Rnd() * 123456) + 1000000

            registrarUsuario()

            Response.Redirect("~/verificar.aspx" & "?erab=" & Temail & "&egZenb=" & TnumVerificacion)
        End If
    End Sub

    Protected Sub StudentRBtn_CheckedChanged(sender As Object, e As EventArgs) Handles StudentRBtn.CheckedChanged
        If StudentRBtn.Checked Then
            TeacherRBtn.Checked = False
            tipoUsuElegido = True
            Trol = StudentRBtn.Text
        End If
    End Sub

    Protected Sub TeacherRBtn_CheckedChanged(sender As Object, e As EventArgs) Handles TeacherRBtn.CheckedChanged
        If TeacherRBtn.Checked Then
            StudentRBtn.Checked = False
            tipoUsuElegido = True
            Trol = TeacherRBtn.Text
        End If
    End Sub

    Protected Function IsValidEmail(email As String) As Boolean
        Dim match As Match = Regex.Match(email, pattern)
        Return match.Success
    End Function

    Protected Sub registrarUsuario()
        Try
            AccesoDatos.AccesoDatos.getInstancia().Conectar()
            AccesoDatos.AccesoDatos.getInstancia().IncluirUsuario(Temail, TName, TlastName, Tquestion, Tanswer, Tna, TnumVerificacion, CBool("False"), Tgroup, TsubGroup, Trol, Tpass)
            AccesoDatos.AccesoDatos.getInstancia().CerrarConexion()
        Catch ex As AccesoDatos.ErrorConexion
            errConexionLbl.Text = ex.Message
        End Try
    End Sub

    Protected Sub reiniciarErrores()
        errEmailLbl.Text = ""
        errAnswerLbl.Text = ""
        errGroupLbl.Text = ""
        errHiddenLbl.Text = ""
        errLastNameLbl.Text = ""
        errNameLbl.Text = ""
        errPassLbl.Text = ""
        errRolLbl.Text = ""
        errSubgroupLbl.Text = ""
        errConexionLbl.Text = ""
        errConfirmPassLbl.Text = ""
        EmailTxt.BorderColor = Color.Black
        NameTxt.BorderColor = Color.Black
        LastNameTxt.BorderColor = Color.Black
        AnswerTxt.BorderColor = Color.Black
        GroupCodeTxt.BorderColor = Color.Black
        QuestionTxt.BorderColor = Color.Black
        CodeSubgroupTxt.BorderColor = Color.Black
        PasswordTxt.BorderColor = Color.Black
        ConfirmPassTxt.BorderColor = Color.Black
    End Sub

    Protected Sub comprobarCamposRellenos()
        If String.IsNullOrWhiteSpace(EmailTxt.Text) Then
            errEmailLbl.Text = "Campo requerido."
            EmailTxt.BorderColor = Color.Red
            allFilled = False
        ElseIf Not IsValidEmail(EmailTxt.Text) Then
            errEmailLbl.Text = "Email no válido."
            EmailTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(NameTxt.Text) Then
            errNameLbl.Text = "Campo requerido."
            NameTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(LastNameTxt.Text) Then
            errLastNameLbl.Text = "Campo requerido."
            LastNameTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(QuestionTxt.Text) Then
            errHiddenLbl.Text = "Campo requerido."
            QuestionTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(AnswerTxt.Text) Then
            errAnswerLbl.Text = "Campo requerido."
            AnswerTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(GroupCodeTxt.Text) Then
            errGroupLbl.Text = "Campo requerido."
            GroupCodeTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(CodeSubgroupTxt.Text) Then
            errSubgroupLbl.Text = "Campo requerido."
            CodeSubgroupTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(PasswordTxt.Text) Then
            errPassLbl.Text = "Campo requerido."
            PasswordTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(ConfirmPassTxt.Text) Then
            errPassLbl.Text = "Campo requerido."
            ConfirmPassTxt.BorderColor = Color.Red
            allFilled = False
        ElseIf PasswordTxt.Text <> ConfirmPassTxt.Text Then
            errPassLbl.Text = "La contraseña debe ser igual a la anterior."
            ConfirmPassTxt.BorderColor = Color.Red
            allFilled = False
        End If
        If Not tipoUsuElegido Then
            errRolLbl.Text = "Campo requerido."
            allFilled = False
        End If
    End Sub

    Protected Sub volverBtn_Click1(sender As Object, e As EventArgs) Handles volverBtn.Click
        Response.Redirect("~/Login.aspx")
    End Sub

End Class