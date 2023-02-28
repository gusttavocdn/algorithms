namespace CSharp.EighthKyu;

public class EighthKyuKata
{

    public static object[] RemoveEveryOther(object[] arr)
    {
        object[] newArr = arr.Where((item, i) => i % 2 == 0).ToArray();
        return newArr;
    }

    // https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/csharp
    public static int Enough(int cap, int on, int wait) => Math.Max(on + wait - cap, 0);

    // https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/csharp
    public static int FindDifference(int[] a, int[] b)
    {

        int aVolume = a.Aggregate((total, value) => total * value);
        int bVolume = b.Aggregate((total, value) => total * value);

        return Math.Abs(aVolume - bVolume);
    }

    // https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/csharp
    public static bool CheckForFactor(int num, int factor) => !Convert.ToBoolean(num % factor);

    // https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/csharp
    public static int Move(int position, int roll) => position += roll * 2;

    // https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/csharp
    public static bool IsUpperCase(string text) => text.ToUpper() == text;

    // https://www.codewars.com/kata/56efc695740d30f963000557/train/csharp
    public static string ToAlternatingCase(string s)
    {
        char[] chars = s.ToCharArray();

        for (int i = 0; i < chars.Length; i++)
        {
            if (char.IsLetter(chars[i]))
            {
                if (char.IsUpper(chars[i])) chars[i] = char.ToLower(chars[i]);
                else chars[i] = char.ToUpper(chars[i]);
            }
        }

        return new string(chars);
    }

    // https://www.codewars.com/kata/57d814e4950d8489720008db/train/csharp
    public static double Index(int[] array, int n)
    {
        if (array.Length <= n) return -1;
        return Math.Pow(array[n], n);
    }

    // https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/csharp
    public static int ExpressionsMatter(int a, int b, int c)
    {
        int maxResult = int.MinValue;

        maxResult = Math.Max(maxResult, a + b + c);
        maxResult = Math.Max(maxResult, a * b + c);
        maxResult = Math.Max(maxResult, a + b * c);
        maxResult = Math.Max(maxResult, a * b * c);
        maxResult = Math.Max(maxResult, (a + b) * c);
        maxResult = Math.Max(maxResult, a * (b + c));

        return maxResult;
    }


}