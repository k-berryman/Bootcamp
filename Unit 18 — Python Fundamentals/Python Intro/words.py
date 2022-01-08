def print_upper_words(words, starting_letters):
    """For a list of words, print out each word
    on a separate line, but in all uppercase.

    Only prints words that start with the starting letters
    """

    arr = []

    for word in words:
        for letter in starting_letters:
            if word[0] == letter:
                print(word.upper())


print_upper_words(["eyy", "hello", "hey", "goodbye", "yo", "yes"], starting_letters={"h", "y"})
