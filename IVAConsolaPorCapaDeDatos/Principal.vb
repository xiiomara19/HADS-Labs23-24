Module Principal

    Sub Main()
        Console.WriteLine("Inserte un número de factura: ")
        Dim CodigoFactura As Integer = Console.ReadLine
        'No entiendo porque no funciona
        'Dim c As New CalculoIvaPorCapaDeDatos_DLL.CalculoIVAMedianteCreadorDeDatos(CodigoFactura)

        Console.WriteLine("Total de la factura sin IVA: {0}")
        Console.WriteLine("IVA: {0}")

        Console.ReadLine()
    End Sub

End Module
