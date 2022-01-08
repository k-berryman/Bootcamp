def remove_every_other(lst):
    """Return a new list of other item.

        >>> lst = [1, 2, 3, 4, 5]

        >>> remove_every_other(lst)
        [1, 3, 5]

    This should return a list, not mutate the original:

        >>> lst
        [1, 2, 3, 4, 5]
    """
    new_list = []
    iter = 1

    for item in lst:
        if item % 2 != 0:
            new_list.append(item)
            iter = iter + 1

    return new_list
