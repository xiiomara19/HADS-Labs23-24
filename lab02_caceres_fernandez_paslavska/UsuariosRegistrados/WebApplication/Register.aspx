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
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </p>
            <asp:Label ID="Label2" runat="server" Text="Nombre"></asp:Label>
        <p>
            <asp:TextBox ID="TextBox2" runat="server" Height="25px" Width="168px"></asp:TextBox>
        </p>
        <p>
        <asp:Label ID="Label3" runat="server" Text="Apellidos"></asp:Label>
        </p>
        <p>
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label6" runat="server" Text="Pregunta oculta"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
        </p>
        <p>
        <asp:Label ID="Label4" runat="server" Text="Respuesta"></asp:Label>
        </p>
        <p>
        <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label7" runat="server" Text="Codigo grupo"></asp:Label>
        </p>
        <p>
            &nbsp;<asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label8" runat="server" Text="Codigo subgrupo"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label9" runat="server" Text="Password"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
        </p>
        <p>
            <asp:Label ID="Label10" runat="server" Text="Rol"></asp:Label>
        </p>
        <p>
            <asp:RadioButton ID="Alumno" runat="server" GroupName="persona" />
&nbsp;Alumno</p>
        <p>
            <asp:RadioButton ID="Profesor" runat="server" GroupName="persona" />
&nbsp;Profesor</p>
        <p>
            <asp:Button ID="Button1" runat="server" Height="45px" Text="Registrar" Width="266px" />
        </p>
    </form>
</body>
</html>