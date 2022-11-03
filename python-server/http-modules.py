from flask import Flask, jsonify
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def dati():
    return jsonify ({'name' : 'gino', 'surname' : 'lino'})
app.run()

