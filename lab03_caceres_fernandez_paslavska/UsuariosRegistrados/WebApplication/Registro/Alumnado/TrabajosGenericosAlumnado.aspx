<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="TrabajosGenericosAlumnado.aspx.vb" Inherits="WebApplication.WebForm8" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        .auto-style2 {
            height: 129px;
        }
        .auto-style3 {
            height: 125px;
        }
    </style>
    </head>
<body style="height: 39px">
    <form id="form1" runat="server">
        <asp:Panel ID="Panel1" runat="server" BackColor="#CCCCCC" Height="55px" HorizontalAlign="Center" Width="504px">
            ALUMNO<br /> GESTIÓN DE TRABAJOS GENÉRICOS</asp:Panel>
        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
   <table class="auto-style2">
        <tr>
            <td class="auto-style3">
                <br />
                <asp:DropDownList ID="asignaturasDDL" runat="server">
                </asp:DropDownList>
                <asp:Panel ID="Panel2" runat="server" Width="169px">
                <br />
                <asp:Button ID="Button1" runat="server" Text="Button" />
                </asp:Panel>
            </td>
            <td class="auto-style3">
                <asp:Panel ID="Panel3" runat="server" Width="251px">
                    <asp:CheckBoxList ID="caractTareasCBL" runat="server">
                        <asp:ListItem Value="kodea">Código</asp:ListItem>
                        <asp:ListItem Value="deskribapena">Descripción</asp:ListItem>
                        <asp:ListItem Value="aurreikusitakoOrduak">Horas previstas</asp:ListItem>
                        <asp:ListItem Value="lanMota">Tipo de trabajo</asp:ListItem>
                    </asp:CheckBoxList>
                </asp:Panel>
            </td>
        </tr>
       <tr>
            <asp:GridView ID="TareasGV" runat="server" AllowSorting="True" AutoGenerateColumns="False" Visible="False">
                <Columns>
                    <asp:CommandField SelectText="Instanciar" ShowSelectButton="True" />
                    <asp:BoundField HeaderText="Codigo" />
                    <asp:BoundField HeaderText="Descripcion" />
                    <asp:BoundField HeaderText="Horas previstas" />
                    <asp:BoundField HeaderText="Tipo de trabajo" />
                </Columns>
            </asp:GridView>
       </tr>
        </table> 

    </form>
</body>
</html>
