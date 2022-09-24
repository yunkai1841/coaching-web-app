from flask import Blueprint, jsonify, request
from app.models import videos
api = Blueprint('videos',
                __name__,
                url_prefix='/api/videos')
@api.route('')
def get_all():
    data = videos.get()
    return jsonify(data), 200


@api.route('/<name>')
def get_by_id(name):
    data = videos.get(name)
    if len(data) > 0:
        return jsonify(data), 200
    else:
        return jsonify({'errors': [{'message': 'NOT FOUND'}]}), 404

@api.route('', methods=['POST'])
def post():
    data = videos.post(
        str(request.form['name']),
        str(request.form['path'])
    )
    return jsonify(data), 201