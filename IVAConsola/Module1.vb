Module Module1

    Sub Main()
        Dim c As New CalculoIVA_DLL.CalculoIVA

        Console.WriteLine("Cantidad a pagar(total): ")
        Try
            Dim total As Double = Console.ReadLine

            Console.WriteLine("Escoga un tipo de IVA:
                            1. general - 21%
                            2. reducido - 10%
                            3. de productos básicos - 5% 
                            ")

            Dim esNum As Boolean
            Dim tipoIVA As Single

            While Not esNum
                tipoIVA = Console.ReadLine
                If tipoIVA > 3 Or tipoIVA < 1 Then
                    Console.WriteLine("Debe insertar una de las opciones proporcionada.")
                Else
                    esNum = True
                End If
            End While

            Dim precioBase As Double
            Dim IVA As Double

            If (tipoIVA = 2) Then
                Console.WriteLine("Tipo IVA: reducido")
                precioBase = c.TotalSinIVA(total, "reducido")
                IVA = c.CalcularIVA(total, "reducido")
            ElseIf (tipoIVA = 3) Then
                Console.WriteLine("Tipo IVA: de productos básicos")
                precioBase = c.TotalSinIVA(total, "productos basicos")
                IVA = c.CalcularIVA(total, "productos basicos")
            Else
                Console.WriteLine("Tipo IVA: general")
                precioBase = c.TotalSinIVA(total, "general")
                IVA = c.CalcularIVA(total, "general")
            End If

            Console.WriteLine("Total sin IVA: {0}", precioBase)
            Console.WriteLine("IVA: {0}", IVA)
        Catch ex As Exception
            Console.WriteLine("Debe insertar un valor numérico.")
        End Try

        Console.ReadLine()
    End Sub

End Module
