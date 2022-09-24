import sqlite3
dbname = 'videos.db'

def get_db():
    con = sqlite3.connect(dbname, isolation_level=None)
    cur = con.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS videos (
        id INTEGER PRIMARY KEY, 
        name TEXT, 
        path TEXT)
    """)
    con.commit()
    return con, cur

def get(name: str = None):
    con, cur = get_db()
    if name is None:
        cur.execute('SELECT * FROM videos')
        rows = cur.fetchall()
        return rows
    else:
        cur.execute('SELECT * FROM videos WHERE name = ?', (name,))
        rows = cur.fetchall()
        if rows:
            return rows
        else:
            return []

def post(name:str, path:str):
    con, cur = get_db()
    cur.execute("INSERT INTO videos (name, path) VALUES (?, ?)",
     (name, path))
    return get()
    