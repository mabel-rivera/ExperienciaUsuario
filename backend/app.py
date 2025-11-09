from flask import Flask
from flask_cors import CORS
from routes.users import users_bp

app = Flask(__name__)
CORS(app)  # 🔥 habilita CORS

app.register_blueprint(users_bp)

@app.route('/')
def home():
    return "API Flask funcionando correctamente"

if __name__ == '_main_':
    app.run(debug=True)