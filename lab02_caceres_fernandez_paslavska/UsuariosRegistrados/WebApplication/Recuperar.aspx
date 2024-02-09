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
            <asp:Label ID="Label1" runat="server" Text="Pregunta"></asp:Label>
            <asp:TextBox ID="TextBox1" runat="server" Height="23px" Width="211px"></asp:TextBox>
        </p>
        <p>
            &nbsp;</p>
        <asp:Label ID="Label2" runat="server" Text="Contraseña"></asp:Label>
        <p>
            &nbsp;</p>
        <p>
            <asp:Button ID="Button1" runat="server" Height="36px" Text="Volver" Width="105px" />
        </p>
    </form>
</body>
</html>
