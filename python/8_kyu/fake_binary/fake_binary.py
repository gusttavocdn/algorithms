def fake_bin(string: str):
    if not string.isdigit():
        return "String must be a valid number"

    return "".join(["1" if int(c) >= 5 else "0" for c in string])


# import string

# def fake_bin(s):
#     return s.translate(string.maketrans('0123456789', '0000011111'))
