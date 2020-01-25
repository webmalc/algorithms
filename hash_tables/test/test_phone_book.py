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
        'add 27229 abc',
        'add 117239 cdd',
        'add 173239 dgd',
        'add 170239 dfd',
        'add 117139 cddd',
        'add 873239 dgdg',
        'add 973239 dfdv',
        'find 76213',
        'find 910',
        'find 911',
        'del 910',
        'del 911',
        'find 911',
        'find 76213',
        'add 76213 daddy',
        'find 76213',
        'add 74572323 tom',
        'find 74572323',
        'del 74572323',
        'find 74572323',
    ]
    queries = [phone_book.Query(c.split()) for c in commands]
    expected = [
        'Mom', 'not found', 'police', 'not found', 'Mom', 'daddy', 'tom',
        'not found'
    ]

    assert phone_book.process_queries(queries) == expected
