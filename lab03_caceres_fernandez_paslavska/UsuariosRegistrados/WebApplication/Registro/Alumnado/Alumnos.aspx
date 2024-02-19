<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Alumnos.aspx.vb" Inherits="WebApplication.WebForm12" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        .auto-style1 {
            width: 915px;
        }

        .auto-style2 {
            width: 282px;
        }
        .auto-style3 {
            margin-left: 0px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <table>
            <tr>
                <td class="auto-style2">
                    <asp:Panel ID="Panel1" runat="server" Height="449px" Width="262px" BackColor="#CCFFCC">
                        <br />
                        <asp:HyperLink ID="HyperLink4" runat="server" NavigateUrl="~/Registro/Alumnado/TrabajosGenericosAlumnado.aspx" style="margin-left: 20px;">Trabajos genéricos</asp:HyperLink>
                        <br />
                        <br />
                        <asp:HyperLink ID="HyperLink3" runat="server" style="margin-left: 20px;">Trabajos personales</asp:HyperLink>
                        <br />
                        <br />
                        <asp:HyperLink ID="HyperLink2" runat="server" style="margin-left: 20px;">Grupos</asp:HyperLink>
                        <br />
                        <br />
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Registro/ModificarPassword.aspx" style="margin-left: 20px;">Cambiar la contraseña</asp:HyperLink>
                    </asp:Panel>
                </td>
                <td class="auto-style1">
                    <asp:Panel ID="Panel2" runat="server" Height="449px" Width="914px" BackColor="#E6FFFF" HorizontalAlign="Center" CssClass="auto-style3">
                        <br />
                        <br />
                        <asp:HyperLink ID="HyperLink5" runat="server">Gestión de trabajos</asp:HyperLink>
                        <br />
                        <br />
                        <asp:HyperLink ID="HyperLink6" runat="server">Alumnos</asp:HyperLink>
                    </asp:Panel>
                </td>
            </tr>
        </table>

    </form>
</body>
</html>
