def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?

        >>> single_letter_count('Hello World', 'h')
        1

        >>> single_letter_count('Hello World', 'z')
        0

        >>> single_letter_count("Hello World", 'l')
        3
    """
    letters = 'abcdefghijklmnopqrstuvwxyz'
    word = word.lower()
    count = 0

    for l in word:
        if l == letter:
            count = count + 1

    return count
