from flask import Blueprint,render_template
api = Blueprint('user2',
                __name__,
                url_prefix='/api/user')
@api.route('')
def sample_form():
    return render_template('react_app/src/components/Home.js')