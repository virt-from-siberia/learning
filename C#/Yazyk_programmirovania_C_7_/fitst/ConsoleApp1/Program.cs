using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("c formt : {0 : c}", 99999);
        }

        static void DisplayMessage()
        {
            string userMessage = string.Format("10000 in hex is {0:x}", 100000);     
        }
    }
}
