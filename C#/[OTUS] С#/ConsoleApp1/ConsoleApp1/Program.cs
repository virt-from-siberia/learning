using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter the name");
            string str = Console.ReadLine();
            int x = Int32.Parse(str);

            Console.WriteLine("Please enter second number");
            str = Console.ReadLine();
            int y = Int32.Parse(str);

            int resaulr = x + y;
            Console.WriteLine(x + y);

            Console.WriteLine(String.Format("Разность двух чисел: {0}", x - y));
            Console.WriteLine($"Произведение двух чисел равно {x * y}");
        }
    }
}
