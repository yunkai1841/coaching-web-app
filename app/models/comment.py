import sqlite3
dbname = 'comment.db'

def get_db():
    con = sqlite3.connect(dbname, isolation_level=None)
    cur = con.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS comment (
        id INTEGER PRIMARY KEY, 
        video_id INTEGER, 
        comment TEXT)
    """)
    con.commit()
    return con, cur

def get(video_id: int = None):
    con, cur = get_db()
    if video_id is None:
        cur.execute('SELECT * FROM comment')
        rows = cur.fetchall()
        return rows
    else:
        cur.execute('SELECT * FROM comment WHERE name = ?', (video_id,))
        rows = cur.fetchall()
        if rows:
            return rows
        else:
            return []

def post(video_id:int, comment:str):
    con, cur = get_db()
    cur.execute("INSERT INTO comment (video_id, comment) VALUES (?, ?)",
     (video_id, comment))
    return get()