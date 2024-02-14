<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Login.aspx.vb" Inherits="WebApplication.WebForm1" %>



<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form2" runat="server">
        <div>
        </div>
        <p>
            <asp:Label ID="Label1" runat="server" Text="E-mail:"></asp:Label>
        </p>
        <p>
            <asp:TextBox ID="emailField" runat="server" Height="30px" Width="164px"></asp:TextBox>
            <asp:Label ID="errEmail" runat="server"></asp:Label>
        </p>
        <p>
            &nbsp;</p>
        <p>
            <asp:Label ID="Label2" runat="server" Text="Password:"></asp:Label>
        </p>
        <asp:TextBox ID="PassField" runat="server" Height="33px" Width="160px"></asp:TextBox>
        <asp:Label ID="errPass" runat="server"></asp:Label>
        <p>
            &nbsp;</p>
        <p>
            <asp:Button ID="Button1" runat="server" Height="38px" Text="Login" Width="96px" />
        </p>
        <p>
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Register.aspx">Quiero registrarme</asp:HyperLink>
        </p>
        <asp:HyperLink ID="recuperarLink" runat="server" NavigateUrl="~/Recuperar.aspx">Recuperar contraseña</asp:HyperLink>
        <p>
            <asp:Label ID="Message" runat="server"></asp:Label>
        </p>
    </form>
</body>
</html>
