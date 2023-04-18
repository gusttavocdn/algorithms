using System.Text;

namespace CSharp.Katas;

public class SeventhKyuKatas
{
    // https://www.codewars.com/kata/559590633066759614000063/train/csharp
    public static int[] minMax(int[] lst)
    {
        return new int[] { lst.Min(), lst.Max() };
    }

    // https://www.codewars.com/kata/56b1f01c247c01db92000076/train/csharp
    public static string DoubleChar(string s)
    {
        StringBuilder builder = new StringBuilder();

        foreach (var value in s)
        {
            builder.Append(value);
            builder.Append(value);
        }

        return builder.ToString();
    }

    //https://www.codewars.com/kata/578553c3a1b8d5c40300037c/csharp
    public static int binaryArrayToNumber(int[] BinaryArray)
    {
        string binaryNumber = String.Concat(BinaryArray);
        return Convert.ToInt32(binaryNumber, 2);
    }

    // https://www.codewars.com/kata/55908aad6620c066bc00002a/train/csharp
    public static bool XO(string input)
    {
        char[] oArray = input.Where((i) => Char.ToLower(i) == 'o').ToArray();
        char[] xArray = input.Where((i) => Char.ToLower(i) == 'x').ToArray();

        return oArray.Length == xArray.Length;
    }
}
