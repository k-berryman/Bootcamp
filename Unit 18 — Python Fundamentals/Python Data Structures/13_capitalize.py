def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    capital = phrase[0][0].upper()
    phrase = phrase[1:]
    phrase = capital + phrase
    return phrase
