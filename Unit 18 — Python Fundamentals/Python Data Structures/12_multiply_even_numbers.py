def multiply_even_numbers(nums):
    """Multiply the even numbers.

        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48

        >>> multiply_even_numbers([3, 4, 5])
        4

    If there are no even numbers, return 1.

        >>> multiply_even_numbers([1, 3, 5])
        1
    """
    evens = []
    product = 0

    for num in nums:
        if num % 2 == 0:
            evens.append(num)

    for num in evens:
        if product == 0:
            product = product + num
        else:
            product = product * num

    if product != 0:
        return product

    return 1
