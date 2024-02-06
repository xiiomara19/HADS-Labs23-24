Module Principal

    Sub Main()
        Try
            Dim esNum As Boolean
            Console.WriteLine("Inserte un número de factura: ")
            Dim CodigoFactura As Integer
            While Not esNum
                CodigoFactura = Console.ReadLine
                If (CodigoFactura < 1 Or CodigoFactura > 4) Then
                    Console.WriteLine("El código de la factura debe ser un valor entre 1 y 4.")
                Else
                    esNum = True
                End If
            End While

            Dim c As New CalculoIvaPorCapaDeDatos_DLL.CalculoIVAMedianteCreadorDeDatos(CodigoFactura)

            Console.WriteLine("Total de la factura sin IVA: {0}", c.TotalSinIva())
            Console.WriteLine("IVA: {0}", c.IVA())
        Catch ex As Exception
            Console.WriteLine("Debe insertar un valor numérico positivo entre 1 y 4.")
        End Try

        Console.ReadLine()
    End Sub

End Module
