using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Calc
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        double num1 = 0;
        double num2 = 0;

        string opiration = "";
        public MainWindow()
        {
            InitializeComponent();
        }

        private void btn_num_Click(object sender, RoutedEventArgs e)
        {
            Button button = (Button)sender;
            String num = button.Content.ToString();

            if (textValue.Text == "0")
                textValue.Text = num;
            else 
                textValue.Text += num;

            if (opiration == "")
            {
                num1 = Double.Parse(textValue.Text);
            }
            else
            {
                num2 = Double.Parse(textValue.Text);
            }
           
        }

        private void btn_opertation_Click(object sender, RoutedEventArgs e)
        {
            Button button = (Button)sender;
            opiration = button.Content.ToString();           
        }

        private void btn_eq_Click(object sender, RoutedEventArgs e)
        {
            double result = 0;
            switch (opiration)
            {
                case "+":
                    result = num1 + num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "min":
                    result = Math.Min(num1, num2);
                    break;
                case "max":
                    result = Math.Max(num1, num2);
                    break;
                case "avg":
                    result = (num1 + num2) / 2;
                    break;
                case "x^y":
                    result = Pow(num1 , (int)num2);
                    break;
            }
            textValue.Text = result.ToString();
            opiration = "";
            num1 = result;
            num2 = 0;
        }

        private double Pow(double x, int y)
        {
            double result = 1;
            for(int i = 1;  i <= y; i++)
            {
                result *= x;
            }
            return result;
        }

        private void btn_C_Click(object sender, RoutedEventArgs e)
        {
            num1 = 0;
            num2 = 0;
            opiration = "";
            textValue.Text = "0";
        }

        private void btn_CE_Click(object sender, RoutedEventArgs e)
        {
               if(opiration == "")
            {
                num1 = 0;
            }  else
            {
                num2 = 0;                
            }
            textValue.Text = "0";
        }

        private void btn_backsp_Click(object sender, RoutedEventArgs e)
        {
            textValue.Text = DropLastChar(textValue.Text);

            if(opiration == "")
            {
                num1 = Double.Parse(textValue.Text);
            }
            else
            {
                num2 = Double.Parse(textValue.Text);
            }
        }

        private string DropLastChar(string text)
        {
            if(text.Length == 1)
            {
                text = "0";
            }
            else
            {
                text = text.Remove(text.Length - 1);
                if(text[text.Length -1] == ',')                
                    text = text.Remove(text.Length - 1);
                
            }
            return text;
        }

        private void btn_plusminus_Click(object sender, RoutedEventArgs e)
        {
            if (opiration == "") {
                num1 = num1 * -1;
                textValue.Text = num1.ToString();
            }
            else
            {
                num2 = num2 * -1;
                textValue.Text = num2.ToString();
            }
        }

        private void btn_comma_Click(object sender, RoutedEventArgs e)
        {
            if (opiration == "")            
                SetComma(num1);
            else
                SetComma(num2);
        }
         
        private void SetComma(double num)
        {
           if (textValue.Text.Contains(','))
                return;
            textValue.Text += ',';
        }
    }
}
