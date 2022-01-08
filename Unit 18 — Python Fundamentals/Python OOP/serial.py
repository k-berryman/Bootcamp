"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        "Set serialNum to the given start number"
        self.serialNum = start - 1
        self.serialStart = start - 1

    def generate(self):
        "Increment serialNum by 1"
        self.serialNum = self.serialNum + 1
        return self.serialNum

    def reset(self):
        "Reset serialNum to the original start number"
        self.serialNum = self.serialStart
