from flask import Flask, render_template

# Set up Flask
app = Flask(__name__)

# Website Routes

@app.route("/")
@app.route("/home")
def home():
    """Function to render the home page"""
    return render_template("home.html")

@app.route("/ping", methods = ["GET"])
def ping():
    """Function to test if the server is up and running"""
    return "pong"

if __name__ == "__main__":
    app.run(host = '0.0.0.0', debug = False)
