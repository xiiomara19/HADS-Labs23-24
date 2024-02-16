<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Recuperar.aspx.vb" Inherits="WebApplication.WebForm6" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
        <p>
            <asp:Label ID="Label4" runat="server" Text="Email"></asp:Label>
&nbsp;
            <asp:TextBox ID="emailField" runat="server"></asp:TextBox>
&nbsp;&nbsp;
            <asp:Label ID="errEmail1" runat="server"></asp:Label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p>
            <asp:Button ID="validarEm" runat="server" Text="Validar email" Height="38px" Width="96px"/>
        </p>
        <p>
            <asp:Label ID="Label1" runat="server" Text="Pregunta"></asp:Label>
            &nbsp;
            <asp:Label ID="pregunta" runat="server"></asp:Label>
        </p>
        <p>
            <asp:Label ID="Label3" runat="server" Text="Respuesta"></asp:Label>
&nbsp;
            <asp:TextBox ID="fieldResp" runat="server" Height="23px" Width="211px"></asp:TextBox>
            <asp:Label ID="errResp" runat="server"></asp:Label>
        </p>
        <p>
            &nbsp;</p>
        <asp:Label ID="Label2" runat="server" Text="Contraseña"></asp:Label>
        &nbsp;
        <asp:Label ID="pass" runat="server"></asp:Label>
        <p>
            <asp:Button ID="comprobar" runat="server" Text="Comprobar" Height="38px" Width="96px" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Text="Volver" Height="38px" Width="96px" />
        </p>
        <p>
            &nbsp;</p>
        <p>
            <asp:Label ID="errorEmail" runat="server"></asp:Label>
        </p>
    </form>
</body>
</html>
