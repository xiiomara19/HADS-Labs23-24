Public Class CalculoIVA

    Private TotalAPagar As Double

    Private TipoIVA As Byte

    Public Sub New(pTotalAPagar As Double, pTotalIVA As Byte)
        TotalAPagar = pTotalAPagar
        TipoIVA = pTotalIVA
    End Sub


    Public Function TotalSinIVA() As Double
        Return Math.Round((TotalAPagar / (100 + CInt(TipoIVA))) * 100, 2)
    End Function

    Public Function IVA() As Double
        Return TotalAPagar - TotalSinIVA()
    End Function

End Class
