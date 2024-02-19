<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="InstanciarTrabajo.aspx.vb" Inherits="WebApplication.WebForm9" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <style type="text/css">
        .auto-style1 {
            margin-left: 43px;
        }

        .auto-style2 {
            width: 683px;
            height: 348px;
        }
        .auto-style3 {
            height: 348px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">

        <asp:Panel ID="Panel1" runat="server" BackColor="#CCCCCC" CssClass="auto-style1" Height="61px" HorizontalAlign="Center" Width="984px">
            ALUMNO<br />
            ¡INSTANCIAR TRABAJO GENÉRICO!
        </asp:Panel>
        <table>
            <tr>
                <td class="auto-style3">
                    <asp:Panel ID="Panel2" runat="server" Height="344px" Width="556px">
                        <br />
                        <asp:Label ID="Label1" runat="server" Text="Email"></asp:Label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                        <br />
                        <br />
                        <asp:Label ID="Label2" runat="server" Text="Trabajo genérico"></asp:Label>
                        &nbsp;&nbsp;
            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                        <br />
                        <br />
                        <asp:Label ID="Label3" runat="server" Text="Horas previstas"></asp:Label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                        <br />
                        <br />
                        <asp:Label ID="Label4" runat="server" Text="Horas invertidas"></asp:Label>
                        &nbsp;&nbsp;&nbsp;
            <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                        <br />
                        <br />
                        <asp:Button ID="CrearBtn" runat="server" Text="Crear trabajo" />
                    </asp:Panel>
                </td>
                <td class="auto-style2">
                    <asp:Panel ID="Panel3" runat="server" Height="284px" Width="681px">
                        <asp:Table ID="Table1" runat="server" BorderColor="Black" BorderStyle="Ridge" BorderWidth="1px" CellPadding="4" CellSpacing="3" ForeColor="Black" GridLines="Both">
                            <asp:TableHeaderRow>
                                <asp:TableHeaderCell>Email</asp:TableHeaderCell>
                                <asp:TableHeaderCell>Código de trabajo</asp:TableHeaderCell>
                                <asp:TableHeaderCell>Horas previstas</asp:TableHeaderCell>
                                <asp:TableHeaderCell>Horas invertidas</asp:TableHeaderCell>
                            </asp:TableHeaderRow>
                        </asp:Table>
                    </asp:Panel>
                </td>
            </tr>
        </table>
        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Registro/Alumnado/TrabajosGenericosAlumnado.aspx" Style="margin-left: 20px;">Atras</asp:HyperLink>
    </form>
</body>
</html>

