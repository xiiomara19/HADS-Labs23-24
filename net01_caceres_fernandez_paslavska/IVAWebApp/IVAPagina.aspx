﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="IVAPagina.aspx.vb" Inherits="IVAWebApp.IVAForm" %>

<!DOCTYPE html>
<script runat="server">

    Protected Sub Page_Load(sender As Object, e As EventArgs)

    End Sub
</script>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
    <style type="text/css">
        #Text1 {
            margin-bottom: 0px;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        Introduzca la cantidad total:
        <p>
            <input id="TotalInput" type="text" runat="server"/><asp:Label ID="ErrorLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
        <p>
            Elija el tipo de IVA aplicado:</p>
        <asp:DropDownList ID="tipoIVAList" runat="server">
            <asp:ListItem Selected="True" Value="21">General</asp:ListItem>
            <asp:ListItem Value="10">Reducido</asp:ListItem>
            <asp:ListItem Value="5">Productos básicos</asp:ListItem>
        </asp:DropDownList>
        <br />
        <br />
        <asp:Button ID="CalcularBtn" runat="server" Text="Calcular" />
        <br />
        <br />
        Precio base:<br />
        <asp:TextBox ID="PrecioBaseTxtBox" runat="server"></asp:TextBox>
        <br />
        <br />
        IVA aplicado:<br />
        <asp:TextBox ID="IVAAplicadoTxtBox" runat="server"></asp:TextBox>
    </form>
</body>
</html>
