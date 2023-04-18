def is_palindrome(s: str):
    string = s.lower()
    return string == string[::-1]
