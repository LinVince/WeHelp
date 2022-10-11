from flask import (
    Flask,
    redirect,
    render_template,
    request,
    session,
    url_for,
)


class User:

    #like Javascript constructor 建構屬性 "slef" is like "this" in Javascript 
    def __init__(self,id,username,password):
        self.id = id
        self.username = username
        self.password = password

    def __repr__(self):
        #__repr__ is the representative of the object. Otherwise, it will be like <object 0x3232323>,,,
        #a better data format called f string
        return f'<User: {self.username}>' #<User: Vince>

users = []
users.append(User(id=1,username='test',password='test'))
        
app = Flask (__name__)
#app.debug = True
app.secret_key = "Thisismysecretkey000000111111"

@app.route('/signin', methods = ['GET','POST'])
def signin():
    if request.method == 'POST':
    #POST = parameter is not embedded into the link

        #remove the user session and start over (if password if wrong)
        session.pop('user_id',None)

        #html name=""
        username = request.form['ac']
        password = request.form['pw']

        #if the login account matches any of the accounts in the list
        #there will only one so [0]
        try:
            user = [x for x in users if x.username == username][0]
            if user and user.password == password:
                #let the server get the cookie so that the login status can remain
                session['user_id'] = user.id
                return redirect(url_for('member'))

        except:
            error = "You got a problem with your account or password."
            return redirect(url_for('error',message="帳號密碼有誤"))

    return render_template('signin.html')

@app.route('/member')
def member():
    return render_template('member.html')

@app.route('/error', methods = ['GET','POST'])
def error():
    return render_template('error.html')





