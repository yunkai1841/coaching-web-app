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

def get(name: int = None):
    con, cur = get_db()
    if name is None:
        cur.execute('SELECT * FROM comment')
        rows = cur.fetchall()
        return rows
    else:
        cur.execute('SELECT * FROM comment WHERE name = ?', (name,))
        rows = cur.fetchall()
        if rows:
            return rows
        else:
            return []

def post(name:str, path:str):
    con, cur = get_db()
    cur.execute("INSERT INTO comment (video_id, comment) VALUES (?, ?)",
     (name, path))
    return get()