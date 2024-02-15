<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Register.aspx.vb" Inherits="WebApplication.WebForm3" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>

<body>
    <form id="form1" runat="server">
        <div>
            REGISTRO DE USUARIOS<br />
            <br />
        </div>
        <asp:Label ID="Label1" runat="server" Text="E-mail"></asp:Label>
        <p>
        <asp:TextBox ID="EmailTxt" runat="server"></asp:TextBox>
            <asp:Label ID="errEmailLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
            <asp:Label ID="Label2" runat="server" Text="Nombre"></asp:Label>
        <p>
            <asp:TextBox ID="NameTxt" runat="server" Height="25px" Width="168px"></asp:TextBox>
            <asp:Label ID="errNameLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
        <asp:Label ID="Label3" runat="server" Text="Apellidos"></asp:Label>
        </p>
        <p>
        <asp:TextBox ID="LastNameTxt" runat="server"></asp:TextBox>
            <asp:Label ID="errLastNameLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label6" runat="server" Text="Pregunta oculta"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="QuestionTxt" runat="server"></asp:TextBox>
            <asp:Label ID="errHiddenLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
        <asp:Label ID="Label4" runat="server" Text="Respuesta"></asp:Label>
        </p>
        <p>
        <asp:TextBox ID="AnswerTxt" runat="server" BorderColor="Black"></asp:TextBox>
            <asp:Label ID="errAnswerLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label7" runat="server" Text="Codigo grupo"></asp:Label>
        </p>
        <p>
            &nbsp;<asp:TextBox ID="GroupCodeTxt" runat="server"></asp:TextBox>
            <asp:Label ID="errGroupLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label8" runat="server" Text="Codigo subgrupo"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="CodeSubgroupTxt" runat="server"></asp:TextBox>
            <asp:Label ID="errSubgroupLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label9" runat="server" Text="Password"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="PasswordTxt" runat="server" TextMode="Password"></asp:TextBox>
            <asp:Label ID="errPassLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label10" runat="server" Text="Rol"></asp:Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Label ID="errRolLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            <asp:RadioButton ID="StudentRBtn" runat="server" GroupName="persona" Text="Alumno" />
        </p>
        <p>
            <asp:RadioButton ID="TeacherRBtn" runat="server" GroupName="persona" Text="Profesor" />
        </p>
        <p>
            <asp:Button ID="RegisterBtn" runat="server" Height="25px" Text="Registrarse" Width="163px" />
        </p>
        <asp:Label ID="errConexionLbl" runat="server" ForeColor="Red"></asp:Label>
    </form>
</body>
</html>