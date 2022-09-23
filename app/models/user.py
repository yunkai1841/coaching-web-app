def get(id: int = None):
    data = [
        {
            'id': '1',
            'password': '1234',
        },
        {
            'id': '2',
            'password': '2345',
        },
        {
            'id': '3',
            'password': '3456',
        },
    ]
    if id:
        for row in data:
            if row['id'] == id:
                return row
        return {}
    else:
        return data
def post(password:str):
    print(password)
    return {
        'id': '4',
        'comment': password,
    }