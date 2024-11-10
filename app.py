from flask import Flask

app = Flask(__name__)

print(__name__)

# flask run to start the website


@app.route("/")
def home():
    return "<p>Home Page</p>"


app.run(debug=True)
