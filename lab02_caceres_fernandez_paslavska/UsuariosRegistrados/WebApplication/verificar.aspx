<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="verificar.aspx.vb" Inherits="WebApplication.verificar" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            VERIFICAR USUARIO<br />
            <br />
            <asp:Label ID="infoLbl" runat="server" Text="Pulsa el botón 'Confirmar' para confirmar el registro"></asp:Label>
            <br />
            <br />
        </div>
        <asp:Button ID="ConfirmarBtn" runat="server" Text="Confirmar" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="volverBtn" runat="server" Enabled="False" Text="Volver al inicio" />
        <p>
            <asp:Label ID="errVerificaciónLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
    </form>
</body>
</html>
