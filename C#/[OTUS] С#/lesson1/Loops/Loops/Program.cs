using System;

namespace Loops
{
    class Program
    {
        static void Main(string[] args)
        {
            //Вывод чисел от 0 до 4
            int i = 0;
            while (i < 5)
            {
                Console.WriteLine(i);
                i++;
            }
            //Цикл for
            for(int x =0; x < 5; x++)
            {
                Console.WriteLine(x);
            }
            //Цикл while
            while (true)
            {
                string str = Console.ReadLine();

                if (Int32.Parse(str) > 0)
                    break;
            }
        }
    }
}
