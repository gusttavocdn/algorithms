def feast(beast: str, dish: str):
    if beast[-1] == dish[-1] and beast[0] == dish[0]:
        return True
    else:
        return False
