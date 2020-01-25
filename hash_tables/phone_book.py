# python3
"""
Task is to implement a simple phone book manager.
"""
from typing import List, Optional


class Query:
    """
    The input query entry
    """
    def __init__(self, query):
        self.type = query[0]
        self.number = int(query[1])
        if self.type == 'add':
            self.name = query[2]


class PhoneBook():
    """
    Class to store phones
    """
    storage: List[Optional[str]]

    def __init__(self):
        self.storage = [None] * pow(10, 5)

    def add(self, phone: int, name: str) -> None:
        """
        Adds the phone
        """
        self.storage[phone] = name

    def delete(self, phone: int) -> None:
        """
        Deletes the phone
        """
        self.storage[phone] = None

    def find(self, phone: int) -> Optional[str]:
        """
        Finds the phone
        """
        return self.storage[phone]


def read_queries():
    """
    Reads the input
    """
    num = int(input())
    return [Query(input().split()) for i in range(num)]


def write_responses(result):
    """
    Writes response
    """
    print('\n'.join(result))


def process_queries(queries):
    """
    Processes the queries
    """
    result = []
    book = PhoneBook()
    for entry in queries:
        if entry.type == 'add':
            book.add(entry.number, entry.name)
        elif entry.type == 'del':
            book.delete(entry.number)
        else:
            name = book.find(entry.number)
            result.append(name or 'not found')

    return result


if __name__ == '__main__':
    write_responses(process_queries(read_queries()))
