"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """Read a file into a list, removing the new line char\n

    Print out “[num-of-words-read] words read”

    Return a random word from this list

    """

    def __init__(self):
        "Open word.txt and save all words locally"
        self.words = open('words.txt','r').read()
        self.listify()

    def listify(self):
        "Turn the string of words into a list"
        self.words = self.words.split()
        print(self.words)

    def count(self):
        "Prints the total count of words"
        print(len(self.words), "words read")

    def rand(self):
        "Returns a random word"
        print(random.choice(self.words))
        return random.choice(self.words)


class SpecialWordFinder(WordFinder):
    """New requirements to filter out lines"""

    def __init__(self):
        "Become a child of WordFinder"
        super().__init__()

    def filter(self):
        "Filter out extra lines"
        for word in self.words:
            if word.startswith('#'):
                self.words.remove(word)
            elif word == "":
                self.words.remove(word)
