from flask import Blueprint, jsonify, request
from app.models import comment
api = Blueprint('comment',
                __name__,
                url_prefix='/api/comment')
@api.route('')
def get_all():
    data = articles.get()
    return jsonify(data), 200
@api.route('/<id>')
def get_by_id(id):
    data = articles.get(id)
    if len(data) > 0:
        return jsonify(data), 200
    else:
        return jsonify({'errors': [{'message': 'NOT FOUND'}]}), 404
@api.route('', methods=['POST'])
def post():
    data = articles.post(
        str(request.form['video_id']),
        str(request.form['comment'])
    )
    return jsonify(data), 201