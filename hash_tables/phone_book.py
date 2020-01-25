# python3
"""
Task is to implement a simple phone book manager
using a self implemented hash table
"""
from typing import List, Optional, Tuple


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
    storage: List[List[Tuple[int, str]]]
    storage_len: int = 5

    def __init__(self):
        self.storage = [[]] * self.storage_len

    def hash(self, phone: int) -> int:
        """
        Hash the value
        """
        return hash(phone) % self.storage_len

    def add(self, phone: int, name: str) -> None:
        """
        Adds the phone
        """
        hashed_phone = self.hash(phone)
        bucket = self.storage[hashed_phone]
        key_exists = i = None
        for i, vals in enumerate(bucket):
            k, _ = vals
            if phone == k:
                key_exists = True
                break
        if key_exists:
            bucket[i] = ((phone, name))
        else:
            bucket.append((phone, name))

    def delete(self, phone: int) -> None:
        """
        Deletes the phone
        """
        hashed_phone = self.hash(phone)
        key_exists = i = None
        bucket = self.storage[hashed_phone]
        for i, vals in enumerate(bucket):
            k, _ = vals
            if phone == k:
                key_exists = True
                break
        if key_exists:
            del bucket[i]

    def find(self, phone: int) -> Optional[str]:
        """
        Finds the phone
        """
        hashed_phone = self.hash(phone)
        bucket = self.storage[hashed_phone]
        for _, vals in enumerate(bucket):
            k, val = vals
            if phone == k:
                return val
        return None


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
