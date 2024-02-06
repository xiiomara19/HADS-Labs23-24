Public Class CalculoIVAMedianteCreadorDeDatos
    Private c As CalculoIVA_DLL.CalculoIVA

    Public Sub New(CodigoFactura As Integer)
        Dim total As Double = CapaDeDatos.GeneradorDeDatos.ObtenerTotalFactura(CodigoFactura)
        Dim tipoIva As Byte = CapaDeDatos.GeneradorDeDatos.ObtenerTipoIVA(CodigoFactura)

        c = New CalculoIVA_DLL.CalculoIVA(total, tipoIva)

    End Sub

    Public Function TotalSinIva() As Double
        Return c.TotalSinIVA()
    End Function

    Public Function IVA() As Double
        Return c.IVA()
    End Function

End Class
