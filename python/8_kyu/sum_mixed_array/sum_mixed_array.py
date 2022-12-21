def sum_mix(arr: list[str | int]):
    try:
        all(isinstance(int(item), (int)) for item in arr)
    except ValueError:
        return "The array must contain only valid numbers"

    return sum([int(item) for item in arr])


sum_mix(["b", 2, 3])


# def sum_mix(arr):
#     return sum(map(int, arr))
