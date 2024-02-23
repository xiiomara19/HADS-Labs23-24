<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="IncluirTrabajoGenerico.aspx.vb" Inherits="WebApplication.WebForm11" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Panel ID="Panel1" runat="server" BackColor="#CCCCCC" CssClass="auto-style1" Height="61px" HorizontalAlign="Center" Width="984px">
            PROFESOR<br />
            GESTIÓN DE LOS TRABAJOS GENÉRICOS
        </asp:Panel>

        <br />
        <br />
        Código&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        <br />
        <br />
        Descripción&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
        <br />
        <br />
        Asignatura&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:DropDownList ID="DropDownList1" runat="server">
        </asp:DropDownList>
        <br />
        <br />
        Horas previstas&nbsp;&nbsp;&nbsp;
        <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
        <br />
        <br />
        Tipo trabajo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:DropDownList ID="DropDownList2" runat="server">
            <asp:ListItem Selected="True">Laboratorio</asp:ListItem>
            <asp:ListItem>Trabajo</asp:ListItem>
            <asp:ListItem>Ejercicio</asp:ListItem>
            <asp:ListItem>Examen</asp:ListItem>
        </asp:DropDownList>
        <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="ObtenerTablaCodigosAsignaturas" TypeName="AccesoDatos.AccesoDatos"></asp:ObjectDataSource>
        <br />
        <br />
        <asp:Button ID="AnadirBtn" runat="server" Text="Añadir trabajo" />
        <br />
        <br />

        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Registro/Profesorado/TrabajosProfesores.aspx" Style="margin-left: 20px;">Mirar trabajos</asp:HyperLink>
    

    </form>
</body>
</html>
