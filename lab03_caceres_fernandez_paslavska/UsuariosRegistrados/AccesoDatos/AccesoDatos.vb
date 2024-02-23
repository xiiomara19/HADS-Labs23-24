Imports System.Data.SqlClient

Public Class AccesoDatos
    Private Shared BDConexion As SqlConnection
    Private Shared SqlComando As SqlCommand
    Private Shared instancia As AccesoDatos
    Private Shared dapAlumnos As SqlDataAdapter
    Private Shared dapTrabajosGenericos As SqlDataAdapter
    Private Shared dapTrabajosGenericosExp As SqlDataAdapter
    Private Shared dapTareasAlumno As SqlDataAdapter
    Private Shared dapCodAsig As SqlDataAdapter
    Private Shared dstCodAsig As DataSet
    Private Shared tblCodAsig As DataTable
    Private Sub New()

    End Sub

    Public Shared Function getInstancia()
        If IsNothing(instancia) Then
            instancia = New AccesoDatos()
        End If
        Return instancia
    End Function


    Public Shared Sub Conectar()
        Dim strconHADS_DB_Erabiltzaileak As String = "Server=tcp:hads2324.database.windows.net,1433;" &
                                                     "Initial Catalog=lab3BD;Persist Security Info=False;" &
                                                     "User ID=efernandez200@ikasle.ehu.eus@hads2324;Password=hads-2324;" &
                                                      "MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;" &
                                                       "Connection Timeout=30;"

        Try
            BDConexion = New SqlConnection(strconHADS_DB_Erabiltzaileak)
            BDConexion.Open()
        Catch ex As Exception
            Throw New ErrorConexion()
        End Try
    End Sub

    Public Shared Sub CerrarConexion()
        BDConexion.Close()
    End Sub

    Public Shared Function IncluirUsuario(pemail As String, nombre As String, apellido As String, preguntaOculta As String, respuesta As String, na As Integer, numeroVerificacion As Long, verificado As Boolean, codigoGrupo As String, codigoSubGrupo As String, tipoUsuario As String, contraseña As String) As Integer
        Dim sql As String = "INSERT INTO Erabiltzaileak(email, izena, abizena, galderaEzkutua, erantzuna, na, egiaztatzeZenbakia, egiaztatua, lantaldeKodea, azpitaldeKodea, erabiltzaileMota, pasahitza) VALUES('" & pemail & "', '" & nombre & "', '" & apellido & "', '" & preguntaOculta & "', '" & respuesta & "', '" & na & "', '" & numeroVerificacion & "', '" & verificado & "', '" & codigoGrupo & "', '" & codigoSubGrupo & "', '" & tipoUsuario & "', '" & contraseña & "')"
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteNonQuery()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return -1
        End Try
        Return numregs
    End Function

    Public Shared Function ObtenerUsuarios(email As String) As SqlDataReader
        Dim sql As String = "SELECT * FROM Erabiltzaileak WHERE email= '" & email & "'"
        SqlComando = New SqlCommand(sql, BDConexion)
        Return SqlComando.ExecuteReader()
    End Function

    Public Shared Function ComprobarUsuario(email As String) As Integer
        Dim sql = "UPDATE Erabiltzaileak SET egiaztatua=1 WHERE email='" & email & "'"
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteNonQuery()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return -1
        End Try
        Return numregs
    End Function

    Public Shared Function ModificarContraseñaUsuario(email As String, nuevaContra As String) As Integer
        Dim sql = "UPDATE Erabiltzaileak SET pasahitza='" & nuevaContra & "'WHERE email='" & email & "'"
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteNonQuery()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return -1
        End Try
        Return numregs
    End Function

    Public Shared Function verificarUsuario(email As String, numVerif As Integer) As SqlDataReader
        Dim sql = "SELECT * FROM Erabiltzaileak WHERE email='" & email & "' AND egiaztatzeZenbakia=" & numVerif
        SqlComando = New SqlCommand(sql, BDConexion)
        Return SqlComando.ExecuteReader()
    End Function

    Public Shared Function AlumnoMatriculadoAsignaturasAdaptadorObtener(pemail As String) As SqlDataAdapter
        Dim sql = "SELECT DISTINCT irakasgaiKodea FROM KlasekoTaldeak WHERE kodea IN (SELECT taldeKodea FROM IkasleakTaldeak WHERE email='" & pemail & "')"
        dapAlumnos = New SqlDataAdapter(sql, BDConexion)
        Return dapAlumnos
    End Function

    Public Shared Function TrabajosGenericosExplotacionAdaptadorObtener() As SqlDataAdapter
        Dim sql As String = "SELECT * FROM LanGenerikoak WHERE ustiapenean=1"
        dapTrabajosGenericosExp = New SqlDataAdapter(sql, BDConexion)
        Return dapTrabajosGenericosExp
    End Function

    Public Shared Function ObtenerAdaptadorTareasAlumnado(pemail As String) As SqlDataAdapter
        Dim sql As String = "SELECT * FROM IkasleakLanak  WHERE email='" & pemail & "'"
        dapTareasAlumno = New SqlDataAdapter(sql, BDConexion)
        Return dapTareasAlumno
    End Function

    Public Shared Function ObtenerAdaptadorTrabajosGenericos(pemail As String) As SqlDataAdapter
        Dim sql As String = "SELECT * FROM LanGenerikoak"
        dapTrabajosGenericos = New SqlDataAdapter(sql, BDConexion)
        Return dapTrabajosGenericos
    End Function

    Public Shared Function ObtenerTablaCodigosAsignaturas() As DataTable

        Dim sql As String = "SELECT kodea FROM Irakasgaiak"
        dapCodAsig = New SqlDataAdapter(sql, BDConexion)
        dstCodAsig = New DataSet()
        dapCodAsig.Fill(dstCodAsig, "Irakasgaiak")

        tblCodAsig = dstCodAsig.Tables("Irakasgaiak")

        Return tblCodAsig

    End Function
End Class
