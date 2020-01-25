"""
The hash tables testes
"""
from hash_tables import phone_book


def test_phone_book():
    """
    Test the phone book script
    """
    commands = [
        'add 911 police',
        'add 76213 Mom',
        'add 17239 Bob',
        'find 76213',
        'find 910',
        'find 911',
        'del 910',
        'del 911',
        'find 911',
        'find 76213',
        'add 76213 daddy',
        'find 76213',
    ]
    queries = [phone_book.Query(c.split()) for c in commands]
    expected = ['Mom', 'not found', 'police', 'not found', 'Mom', 'daddy']

    assert phone_book.process_queries(queries) == expected
