Public Class GeneradorDeDatos

    Private Shared ImportesFacturasYTiposIVA As Double(,) = {{2500, 10}, {3150.55, 21}, {25000, 21}, {315.35, 4}}

    Private Sub New()
    End Sub

    Public Shared Function ObtenerTotalFactura(numeroFactura As Integer) As Double
        If numeroFactura > 0 AndAlso numeroFactura <= ImportesFacturasYTiposIVA.GetLength(0) Then

            Return ImportesFacturasYTiposIVA(numeroFactura - 1, 0)
        Else
            Throw New ArgumentException("Número de factura no válido")
        End If
    End Function

    Public Shared Function ObtenerTipoIVA(numeroFactura As Integer) As Integer
        If numeroFactura > 0 AndAlso numeroFactura <= ImportesFacturasYTiposIVA.GetLength(0) Then

            Return CInt(ImportesFacturasYTiposIVA(numeroFactura - 1, 1))
        Else
            Throw New ArgumentException("Número de factura no válido")
        End If
    End Function

End Class
