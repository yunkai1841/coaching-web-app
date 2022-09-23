def get(id: int = None):
    data = [
        {
            'id': '1',
            'video_id': '1',
            'comment': 'かっこいい！',
        },
        {
            'id': '2',
            'video_id': '2',
            'comment': 'すごい！',
        },
        {
            'id': '3',
            'video_id': '3',
            'comment': '面白い！',
        },
    ]
    if id:
        for row in data:
            if row['id'] == id:
                return row
        return {}
    else:
        return data
def post(video_id:str, comment:str):
    print(video_id)
    print(comment)
    return {
        'id': '4',
        'video_id': video_id,
        'comment': comment,
    }
