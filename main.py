import requests
from flask import Flask, render_template, send_from_directory, make_response, request
from urllib.parse import unquote
from requests.auth import HTTPBasicAuth
import re

app = Flask(__name__)

@app.route("/")
def homepage():
    return send_from_directory('static', 'index.html')


@app.route('/static/<path:path>')
def send_static_file(path):
    return send_from_directory('static', path)


@app.route("/fetch/")
def get_data():
    url = unquote(request.args['url'])
    searchAuth = re.match("(.*:\/\/)(.*):(.*)@(.*)", url)
    auth = None
    if searchAuth:
        url = searchAuth.group(1) + searchAuth.group(4)
        auth = HTTPBasicAuth(searchAuth.group(2), searchAuth.group(3))
    try:
        content = requests.get(url, auth=auth).content
        return make_response(content)
    except:
        return ''


if __name__ == '__main__':
    app.run('', 8004)
