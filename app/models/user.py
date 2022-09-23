def get(id: int = None):
    data = [
        {
            'id': '1',
            'password': '山田太郎',
        },
        {
            'id': '2',
            'password': '佐藤花子',
        },
        {
            'id': '3',
            'password': '鈴木さくら',
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