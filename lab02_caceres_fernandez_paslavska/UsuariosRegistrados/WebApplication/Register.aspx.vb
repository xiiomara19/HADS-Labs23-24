Public Class WebForm3
    Inherits System.Web.UI.Page

    Private Shared tipoUsuElegido As Boolean
    Private Shared allFilled As Boolean
    Dim da As AccesoDatos.AccesoDatos

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
        da = AccesoDatos.AccesoDatos.getInstancia()
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

    Protected Sub registrarUsuario()
        Try
            da.Conectar()
            errConexionLbl.Text = da.IncluirUsuario(Temail, TName, TlastName, Tquestion, Tanswer, Tna, TnumVerificacion, vbNull, Tgroup, TsubGroup, Trol, Tpass)
            da.CerrarConexion()
        Catch ex As Exception
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
    End Sub

    Protected Sub comprobarCamposRellenos()
        If String.IsNullOrWhiteSpace(EmailTxt.Text) Then
            errEmailLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(NameTxt.Text) Then
            errNameLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(LastNameTxt.Text) Then
            errLastNameLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(QuestionTxt.Text) Then
            errHiddenLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(AnswerTxt.Text) Then
            errAnswerLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(GroupCodeTxt.Text) Then
            errGroupLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(CodeSubgroupTxt.Text) Then
            errSubgroupLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If String.IsNullOrWhiteSpace(PasswordTxt.Text) Then
            errPassLbl.Text = "Campo requerido."
            allFilled = False
        End If
        If Not tipoUsuElegido Then
            errRolLbl.Text = "Campo requerido."
            allFilled = False
        End If
    End Sub
End Class