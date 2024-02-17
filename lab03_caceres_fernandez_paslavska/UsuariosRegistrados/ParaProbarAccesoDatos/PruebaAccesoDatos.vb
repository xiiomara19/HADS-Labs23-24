﻿Imports System.Data.SqlClient

Module PruebaAccesoDatos

    Sub Main()
        Dim da As AccesoDatos.AccesoDatos
        da = AccesoDatos.AccesoDatos.getInstancia()
        Try
            Console.WriteLine("Conectando a la BD...")
            da.Conectar()
            Console.WriteLine("Conexión a la BD realizada con éxito.")
            da.IncluirUsuario("pra@gmail.com", "prueba", "test", "Que tal?", "Bien", 22, 22, True, 33, 32, "Alumno", 1111)
            'da.IncluirUsuario("x@gmail.com", "prueba2", "test", "Que tal?", "Bien", 10, 10, False, 10, 10, "Alumno", 1234)

            Dim usuario As SqlClient.SqlDataReader = da.ObtenerUsuarios("prueba@gmail.com")
            Console.WriteLine(usuario.Read())
            Console.WriteLine(usuario.GetString(1))
            Console.WriteLine("Cerrando conexión con la BD...")
            da.CerrarConexion()
            usuario.Close()
            Console.WriteLine("Conexión con la BD cerrada.")
        Catch ex As Exception
            Console.WriteLine(ex.Message)
        End Try
        Console.ReadLine()
    End Sub
    'email As String, nombre As String, apellido As String, preguntaOculta As String, respuesta As String, na As Integer,
    'numeroVerificacion As Integer, verificado As Boolean, codigoGrupo As String,
    'codigoSubGrupo As String, tipoUsuario As String, contraseña As String
End Module
