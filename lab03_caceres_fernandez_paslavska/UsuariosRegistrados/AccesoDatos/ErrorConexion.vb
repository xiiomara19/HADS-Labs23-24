Public Class ErrorConexion
    Inherits ApplicationException

    Public Sub New(Optional ByVal Mensaje As String = "Error: No se ha podido establecer la conexión con la base de datos.")
        MyBase.New(Mensaje)
    End Sub

End Class
