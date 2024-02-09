<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Modificar.aspx.vb" Inherits="WebApplication.WebForm4" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <br />
            <br />
        </div>
        <asp:Label ID="Label1" runat="server" Text="Contraseña"></asp:Label>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <br />
        <br />
        <p>
            <asp:Label ID="Label3" runat="server" Text="Nueva contraseña"></asp:Label>
            <asp:TextBox ID="TextBox2" runat="server" style="margin-bottom: 0px"></asp:TextBox>
        </p>
        <asp:Label ID="Label4" runat="server" Text="Repite nueva contraseña"></asp:Label>
        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
        <p>
            &nbsp;</p>
        <asp:Button ID="Button1" runat="server" Height="38px" Text="Volver" Width="110px" />
    </form>
</body>
</html>
