from flask import Blueprint, jsonify, request
from app.models import videos
from server import app

api = Blueprint('upload',
                __name__,
                url_prefix='/api/upload')

# api form data
@api.route('', methods=['GET'])
def index():
    return '''
    <form method="post" action="/upload" enctype="multipart/form-data">
      <input type="file" name="file">
      <button>upload</button>
    </form>
'''

# file upload
@api.route('', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No such file'

    # fileの取得（FileStorage型で取れる）
    # https://tedboy.github.io/flask/generated/generated/werkzeug.FileStorage.html
    fs = request.files['file']

    # 下記のような情報がFileStorageからは取れる
    app.logger.info('file_name={}'.format(fs.filename))
    app.logger.info('content_type={} content_length={}, mimetype={}, mimetype_params={}'.format(
        fs.content_type, fs.content_length, fs.mimetype, fs.mimetype_params))

    # ファイルを保存
    fs.save('uploads/' + fs.filename)

    videos.post(fs.filename, 'uploads/' + fs.filename)

    return {'status': 'success'}, 201
