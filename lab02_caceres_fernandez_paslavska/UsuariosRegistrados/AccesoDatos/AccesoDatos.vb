﻿Imports System.Data.SqlClient

Public Class AccesoDatos
    Private Shared BDConexion As SqlConnection
    Private Shared SqlComando As SqlCommand
    Private Shared instancia As AccesoDatos
    Private Sub New()

    End Sub

    Public Shared Function getInstancia()
        If IsNothing(instancia) Then
            instancia = New AccesoDatos()
        End If
        Return instancia
    End Function


    Public Shared Sub Conectar()
        Dim strconHADS_DB_Erabiltzaileak As String =
            "Server=tcp:hads2324.database.windows.net,1433;Initial Catalog=usuariosBD;Persist Security 
            Info=False;User ID=efernandez200@ikasle.ehu.eus@hads2324;Password=hads-2324;
            MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection 
            Timeout=30;"
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

    Public Shared Function IncluirUsuario(email As String, nombre As String, apellido As String, preguntaOculta As String, respuesta As String, na As Integer, numeroVerificacion As Integer, verificado As Boolean, codigoGrupo As String, codigoSubGrupo As String, tipoUsuario As String, contraseña As String) As Integer
        Dim sql As String = "INSERT INTO Erabiltzaileak VALUES('" & email & "', '" & nombre & "', '" & apellido & "', '" & preguntaOculta & "', '" & respuesta & "', '" & na & "', '" & numeroVerificacion & "', '" & verificado & "', '" & codigoGrupo & "', '" & codigoSubGrupo & "', '" & tipoUsuario & "', '" & contraseña & "')"
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteNonQuery()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return 1
        End Try
        Return numregs
    End Function

    Public Shared Function ObtenerUsuarios(email As String) As SqlDataReader
        Dim sql = "SELECT * FROM Erabiltzaileak WHERE email= '" & email & "'"
        SqlComando = New SqlCommand(sql, BDConexion)
        Return SqlComando.ExecuteReader()
    End Function

    Public Shared Function ComprobarUsuario(email As String) As Integer
        Dim sql = "UPDATE Erabiltzaileak SET egiaztatua=true where email='" & email & "' "
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteScalar()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return 1
        End Try
        Return numregs
    End Function

    Public Shared Function ModificarConstraseñaUsuario(email As String, nuevaContra As String) As Integer
        Dim sql = "UPDATE Erabiltzaileak SET ´pasahitza='" & nuevaContra & "'WHERE email='" & email & "'"
        SqlComando = New SqlCommand(sql, BDConexion)
        Dim numregs As Integer
        Try
            numregs = SqlComando.ExecuteNonQuery()
        Catch ex As Exception
            Console.WriteLine(ex.Message)
            Return 1
        End Try
        Return numregs
    End Function


End Class