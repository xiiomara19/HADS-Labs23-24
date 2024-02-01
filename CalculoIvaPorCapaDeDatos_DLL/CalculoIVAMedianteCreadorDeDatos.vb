Public Class CalculoIVAMedianteCreadorDeDatos
    Private c As CalculoIVA_DLL.CalculoIVA

    Public Sub New(CodigoFactura As Integer)

    End Sub

    Public Function TotalSinIva() As Double
        Return c.TotalSinIVA()
    End Function

    Public Function IVA() As Double
        Return
    End Function

End Class
