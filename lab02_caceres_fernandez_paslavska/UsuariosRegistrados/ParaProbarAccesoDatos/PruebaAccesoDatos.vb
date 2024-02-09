Module PruebaAccesoDatos

    Sub Main()
        Dim da As AccesoDatos.AccesoDatos
        da.Conectar()
        da.IncluirUsuario("d@gmail.com", "Daria", "Paslavska", "Que tal?", "Bien", 22, 22, True, 33, 32, "Alumno", 1111)
        da.ObtenerUsuarios("d@gmail.com")
        da.CerrarConexion()
    End Sub
    'email As String, nombre As String, apellido As String, preguntaOculta As String, respuesta As String, na As Integer,
    'numeroVerificacion As Integer, verificado As Boolean, codigoGrupo As String,
    'codigoSubGrupo As String, tipoUsuario As String, contraseña As String
End Module
