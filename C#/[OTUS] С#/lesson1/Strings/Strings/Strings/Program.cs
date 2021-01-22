using System;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            //Конкатинация строк
            string str1 = "Привет ";
            string str2 = "мир!";

            string str = str1 + str2;
            Console.WriteLine(str);

            //Конкатинация строк
            int length = str1.Length;
            Console.WriteLine(length);

            //Доступ к элементу
            char cFirst = str[0];
            char cLast = str[str.Length - 1];
        }
    }
}
