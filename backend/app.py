# from flask import Flask
# from flask_cors import CORS
# from routes.users import users_bp

# app = Flask(__name__)
# CORS(app)  # 🔥 habilita CORS

# app.register_blueprint(users_bp)

# @app.route('/')
# def home():
#     return "API Flask funcionando correctamente"

# if __name__ == '_main_':
#     app.run(debug=True)

    
from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite conexión desde Angular
app.config["JWT_SECRET_KEY"] = "clave_secreta_super_segura"  # cámbiala por una más segura

jwt = JWTManager(app)

# 🟢 Ruta de login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    correo = data.get('correo')
    password = data.get('password')

    # Aquí simulas autenticación (puedes reemplazar con base de datos real)
    if correo == "usuario@ejemplo.com" and password == "12345":
        token = create_access_token(identity={"correo": correo})
        return jsonify({"token": token}), 200
    else:
        return jsonify({"mensaje": "Credenciales inválidas"}), 401


# 🟢 Ruta protegida: perfil
@app.route('/perfil', methods=['GET'])
@jwt_required()
def perfil():
    user = get_jwt_identity()
    return jsonify({
        "usuario": user["correo"],
        "mensaje": "Bienvenido al perfil protegido 🔒"
    }), 200


if __name__ == '_main_':
    app.run(debug=True)