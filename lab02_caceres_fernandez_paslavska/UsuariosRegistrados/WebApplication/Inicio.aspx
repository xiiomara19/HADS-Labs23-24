<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Inicio.aspx.vb" Inherits="WebApplication.WebForm2" %>

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
            Home<br />
        </div>
        <asp:Button ID="LoginBtn" runat="server" Text="Login" Height="38px" Width="96px"/>
        <p>
            <asp:Button ID="RegisterBtn" runat="server" Text="Registro" />
        </p>
    </form>
</body>
</html>
