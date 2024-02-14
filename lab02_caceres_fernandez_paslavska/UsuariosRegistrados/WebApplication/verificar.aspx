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
            Pulsa el botón &#39;Confirmar&#39; para confirmar el registro<br />
        </div>
        <asp:Button ID="ConfirmarBtn" runat="server" Text="Confirmar" />
        <p>
            <asp:Label ID="errVerificaciónLbl" runat="server" ForeColor="Red"></asp:Label>
        </p>
    </form>
</body>
</html>
