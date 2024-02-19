<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Menu.aspx.vb" Inherits="WebApplication.WebForm5" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            PARA USUARIOS REGISTRADOS</div>
        <p>
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Registro/ModificarPassword.aspx">Cambiar la contraseña</asp:HyperLink>
        </p>
        <p>
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="Final.aspx">Salir de la app</asp:HyperLink>
        </p>
        <p>
            &nbsp;</p>
    </form>
</body>
</html>
