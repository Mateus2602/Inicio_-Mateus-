using System;

class Program
{
    static void Main()
    {
        Random sorteio = new Random();

        Console.WriteLine("================================");
        Console.WriteLine("      SORTEADOR DE 1 A 10");
        Console.WriteLine("================================");

        string resposta = "S";

        while (resposta.ToUpper() == "S")
        {
            Console.WriteLine("\nPressione ENTER para sortear!");

            Console.ReadLine();

            int numero = sorteio.Next(1, 11);

            Console.WriteLine("==============================");
            Console.WriteLine("   NUMERO SORTEADO: " + numero);
            Console.WriteLine("==============================");

            Console.WriteLine("\nDeseja sortear novamente? (S/N)");
            resposta = Console.ReadLine();
        }

        Console.WriteLine("\nSorteio encerrado!");
        Console.ReadKey();
    }
}