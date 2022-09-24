from flask import Blueprint,render_template
from app.models import user
api = Blueprint('user',
                __name__,
                url_prefix='/api/user')
@api.route('')
def sample_form():
    return render_template('react_app/src/components/Home.js')