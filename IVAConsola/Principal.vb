Module Principal

    Sub Main()
        Try
            Dim esNum As Boolean
            Console.WriteLine("Cantidad a pagar(total): ")
            Dim total As Double
            While Not esNum
                total = Console.ReadLine
                If (total < 0) Then
                    Console.WriteLine("La cantidad total a pagar debe ser un valor positivo.")
                Else
                    esNum = True
                End If
            End While

            Console.WriteLine("Escoga un tipo de IVA:
                            1. general - 21%
                            2. reducido - 10%
                            3. de productos básicos - 5% 
                            ")

            Dim tipoIVA As Single
            esNum = False

            While Not esNum
                tipoIVA = Console.ReadLine
                If (tipoIVA > 3 Or tipoIVA < 1) Then
                    Console.WriteLine("Debe insertar una de las opciones proporcionada.")
                Else
                    esNum = True
                End If
            End While

            Dim pTotalIVA As Byte

            If (tipoIVA = 2) Then
                Console.WriteLine("Tipo IVA: reducido")
                pTotalIVA = 10
            ElseIf (tipoIVA = 3) Then
                Console.WriteLine("Tipo IVA: de productos básicos")
                pTotalIVA = 5
            Else
                Console.WriteLine("Tipo IVA: general")
                pTotalIVA = 21
            End If

            Dim c As New CalculoIVA_DLL.CalculoIVA(total, pTotalIVA)

            Console.WriteLine("Total sin IVA: {0}", c.TotalSinIVA())
            Console.WriteLine("IVA: {0}", c.CalcularIVA())
        Catch ex As Exception
            Console.WriteLine("Debe insertar un valor numérico positivo.")
        End Try

        Console.ReadLine()
    End Sub

End Module
