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
        <asp:TextBox ID="PassField" runat="server"></asp:TextBox>
            <asp:Label ID="errPswdAntg" runat="server" ForeColor="Red"></asp:Label>
        <br />
        <br />
        <p>
            <asp:Label ID="Label3" runat="server" Text="Nueva contraseña"></asp:Label>
            <asp:TextBox ID="PswdField1" runat="server" style="margin-bottom: 0px"></asp:TextBox>
            <asp:Label ID="errPswdNuevo1" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <asp:Label ID="Label4" runat="server" Text="Repite nueva contraseña"></asp:Label>
        <asp:TextBox ID="PswdField2" runat="server"></asp:TextBox>
            <asp:Label ID="errPswdNuevo2" runat="server" ForeColor="Red"></asp:Label>
        <p>
            <asp:Label ID="errPswd" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <asp:Button ID="Button1" runat="server" Height="38px" Text="Volver" Width="110px" />
    </form>
</body>
</html>
