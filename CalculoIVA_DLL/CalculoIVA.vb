Public Class CalculoIVA

    Private total As Double
    Private Enum tipoIVAEnum
        general = 21
        reducido = 10
        productos_basicos = 5
    End Enum

    Private tipoIVA As tipoIVAEnum

    Private precioBase As Double
    Private IVA As Double

    Public Sub New()
        tipoIVA = tipoIVAEnum.general
    End Sub


    Public Function TotalSinIVA(totalPrecio As Double, tipo As String) As Double
        Dim tipoIVA As tipoIVAEnum

        If (tipo = "general") Then
            tipoIVA = tipoIVAEnum.general
        ElseIf (tipo = "reducido") Then
            tipoIVA = tipoIVAEnum.reducido

        ElseIf (tipo = "productos basicos") Then
            tipoIVA = tipoIVAEnum.productos_basicos
        End If
        precioBase = (totalPrecio / (100 + CInt(tipoIVA))) * 100



        Return Math.Round(precioBase, 2)
    End Function

    Public Function CalcularIVA(totalPrecio As Double, tipo As String) As Double
        IVA = totalPrecio - TotalSinIVA(totalPrecio, tipo)
        Return IVA
    End Function

End Class
