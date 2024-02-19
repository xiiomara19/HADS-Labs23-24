<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Alumnos.aspx.vb" Inherits="WebApplication.WebForm12" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <br />
            ALUMNOS</div>
        <asp:Panel ID="Panel1" runat="server" Height="299px" Width="444px">
            <br />
            <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Registro/Alumnado/TrabajosGenericosAlumnado.aspx">Trabajos genéricos</asp:HyperLink>
            <br />
            <asp:HyperLink ID="HyperLink3" runat="server" >Trabajos personales</asp:HyperLink>
            <br />
            <asp:HyperLink ID="HyperLink2" runat="server" >Grupos</asp:HyperLink>
            <br />
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Registro/ModificarPassword.aspx">Cambiar la contraseña</asp:HyperLink>
        </asp:Panel>
    </form>
</body>
</html>
