from flask import Blueprint, jsonify, request
from app.models import user
api = Blueprint('user',
                __name__,
                url_prefix='/api/user')
@api.route('')
def get_all():
    data = user.get()
    return jsonify(data), 200
@api.route('/<id>')
def get_by_id(id):
    data = user.get(id)
    if len(data) > 0:
        return jsonify(data), 200
    else:
        return jsonify({'errors': [{'message': 'NOT FOUND'}]}), 404
@api.route('', methods=['POST'])
def post():
    data = user.post(str(request.form['password']))
    return jsonify(data), 201
