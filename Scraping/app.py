from flask import Flask, jsonify
from flask_cors import CORS
from getScraping import GetLastValue

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def getValueStockActual():
    values = GetLastValue()
    return jsonify({
        "success": True,
        "stocks": values
    })

if __name__ == '__main__':
    app.run(debug=True)