<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="TrabajosProfesores.aspx.vb" Inherits="WebApplication.WebForm10" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body style="height: 121px">
    <form id="form1" runat="server">
        <div>
        </div>
        <asp:Panel ID="Panel1" runat="server" BackColor="#CCCCCC" Height="94px" HorizontalAlign="Center" style="margin-bottom: 26px">
            <br />
            PROFESOR<br /> GESTION DE TAREAS GENERICOS</asp:Panel>
        <asp:Panel ID="Panel2" runat="server" Height="254px" Width="1164px">
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Label ID="Label1" runat="server" Text="Seleccionar asignatura"></asp:Label>
            :<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:DropDownList ID="DropDownList1" runat="server" Height="93px" Width="225px" DataSourceID="sqldsDocentesGrupos" AutoPostBack="True" DataTextField="irakasgaiKodea"  DataValueField="irakasgaiKodea">
                <asp:ListItem></asp:ListItem>
            </asp:DropDownList>
            &nbsp;&nbsp;&nbsp;<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Height="36px" Text="Añadir nuevo trabajo" Width="201px" />
            <asp:SqlDataSource ID="sqldsDocentesGrupos" runat="server" ConnectionString="<%$ ConnectionStrings:lab3BDConnectionString %>" 
                SelectCommand="SELECT KlasekoTaldeak.irakasgaiKodea FROM (KlasekoTaldeak INNER JOIN IrakasleakTaldeak ON KlasekoTaldeak.kodea = IrakasleakTaldeak.taldeKodea) WHERE (IrakasleakTaldeak.email = @email)">
                <SelectParameters>
                    <asp:SessionParameter DefaultValue="Session(&quot;loggedUserEmail&quot;)" Name="email" SessionField="loggedUserEmail" />
                </SelectParameters>
            </asp:SqlDataSource>
            <br />
            <br />
            <br />
            <br />
        </asp:Panel>
        <asp:Panel ID="Panel3" runat="server" Height="305px" Width="840px">
            <asp:GridView ID="GridView1" runat="server" Height="307px" Width="845px" AllowSorting="True" AutoGenerateColumns ="False" DataKeyNames="kodea" DataSourceID="sqldsTrabajosGenericos" BorderColor="#006666" BorderStyle="Double" AutoGenerateEditButton="True">
                <Columns>
                    <asp:BoundField DataField="irakasgaiKodea" HeaderText="Codigo" ReadOnly="True" SortExpression="kodea" >
                    <FooterStyle ForeColor="White" />
                    <HeaderStyle BackColor="#006666" BorderColor="#006666" BorderStyle="Double" />
                    </asp:BoundField>
                    <asp:BoundField DataField="deskribapena" HeaderText="Descripcion" SortExpression="deskribapena" />
                    <asp:BoundField DataField="irakasgaiKodea" HeaderText="CodAsig" SortExpression="irakasgaiKodea" />
                    <asp:BoundField DataField="aurreikusitakoOrduak" HeaderText="HEstimadas" SortExpression="aurreikusitakoOrduak" />
                    <asp:CheckBoxField DataField="ustiapenean" HeaderText="Explotacion" SortExpression="ustiapenean" />
                    <asp:BoundField DataField="lanMota" HeaderText="TipoTarea" SortExpression="lanMota" />
                </Columns>
                <HeaderStyle BackColor="#006666" ForeColor="White" />
            </asp:GridView>
        </asp:Panel>
        <asp:SqlDataSource ID="sqldsTrabajosGenericos" runat="server" ConnectionString="<%$ ConnectionStrings:lab3BDConnectionString2 %>" SelectCommand="SELECT kodea, deskribapena, irakasgaiKodea, aurreikusitakoOrduak, ustiapenean, lanMota FROM LanGenerikoak WHERE (irakasgaiKodea = @irakasgaiKodea)" DeleteCommand="DELETE FROM LanGenerikoak" InsertCommand="INSERT INTO LanGenerikoak() VALUES()" UpdateCommand="UPDATE LanGenerikoak SET deskribapena= @deskribapena, aurreikusitakoOrduak= @aurreIkusitakoOrduak, lanMota=@lanMota WHERE kodea=@kodea">
            <SelectParameters>
                <asp:ControlParameter ControlID="DropDownList1" DefaultValue="DropDownList1.SelectedValue()" Name="irakasgaiKodea" PropertyName="SelectedValue" />
            </SelectParameters>
            <UpdateParameters>
                <asp:Parameter Name="deskribapena" />
                <asp:Parameter Name="aurreIkusitakoOrduak" />
                <asp:Parameter Name="lanMota" />
                <asp:Parameter Name="kodea" />
            </UpdateParameters>
        </asp:SqlDataSource>
        <br />
        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/Login.aspx">Cerrar sesion</asp:HyperLink>
        <br />
        <br />
    </form>
</body>
</html>
