using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {

      
            int x = Int32.Parse(GetUserNumber("Please enter the first number"));         
            int y = Int32.Parse(GetUserNumber("Please enter second number"));

            Console.WriteLine("Please enter the command: +, -, *, /, max, min");
            string cmd = Console.ReadLine(); 

            int result = GetResult(x, y, cmd);
            Console.WriteLine($"resault : {result}");


        } 

        private static int GetResult(int x, int y, string cmd)
        {
           int result;
           switch(cmd)
            {
                case "+":
                    result =  x + y;
                    break; 
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = x / y;
                    break;
                case "min":
                    result = GetMin(x, y);
                    break;
                case "max":
                    result = GetMax(x, y);
                    break;
                default:
                    result = 0;
                    break;
            }

            return result;
            
        }

        static string GetUserNumber(string message)
        {
            Console.WriteLine(message);
            string str = Console.ReadLine();

            return str;
        }

        static int GetMax(int a, int b)
        {
            int max = 0;

            if (a > b)
                max = a;
            else
                max = b;

            return max;            
        }

        static int GetMin(int a, int b)
        {
            int min = 0;

            if (a < b)
                min = a;
            else
                min = b;

            return min;
        }
    }
}
