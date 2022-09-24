from flask import Flask
from app.apis import hello, articles, videos, user, comment, upload

app = Flask(__name__)
app.register_blueprint(hello.api)
app.register_blueprint(articles.api)
app.register_blueprint(videos.api)
app.register_blueprint(upload.api)
app.register_blueprint(user.api)
app.register_blueprint(comment.api)
