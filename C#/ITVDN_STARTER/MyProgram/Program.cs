using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyProgram
{
    class Program
    {
        static void Main(string[] args)
        {       

            Int32 fullName = 1;
            int allias = 2;
            Console.WriteLine(fullName);
            Console.WriteLine(allias);
            Console.ReadKey();
            
            int size = sizeof(decimal);
            Console.WriteLine(size);
            Console.ReadKey();

            float t = 28;
            Console.WriteLine(t);
            Console.ReadKey();

            int[] ageList = {1, 2 , 3};
            int age = ageList[3];

            Console.WriteLine(age);
            Console.ReadKey();


        }
    }
}
