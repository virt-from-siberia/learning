using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            do
            {
                int x = GetUserNumber("Please enter the first number");
                int y = GetUserNumber("Please enter second number");

                Console.WriteLine("Please enter the command: +, -, *, /, max, min");
                string cmd = Console.ReadLine();

                int result = GetResult(x, y, cmd);
                Console.WriteLine($"resault : {result}");

            } while (AskContinue());
            
            
        } 

        static bool AskContinue()
        {
            while (true)
            {
                Console.WriteLine("Do you want to continue ?");
                var status = Console.ReadLine();
                if (status == "Y" || status == "y")
                    return true;
                else if (status == "N" || status == "n")
                    return false;
                else
                    Console.WriteLine("Write Y or N");
            }
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

        static int GetUserNumber(string message)
        {
            Console.WriteLine(message);          

            while (true)
            {
                string str = Console.ReadLine();

                int res;
                if (Int32.TryParse(str, out res))
                    return res;
                else
                    Console.WriteLine("Please enter corrent date");
            }
          
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
