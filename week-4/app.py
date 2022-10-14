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
        

        if username == '' and password == '':
            return render_template('signin.html')
            

        elif username == '' or password == '':
            return redirect(url_for('error',message='請輸入帳號及密碼'))
        
        #if the login account matches any of the accounts in the list
        #there will only one so [0]
        else:
            try: 
                user = [x for x in users if x.username == username][0]
                if user.password == password:
                    #let the server get the cookie so that the login status can remain
                    session['user_id'] = user.id
                    session['user_login'] = True
                    return redirect(url_for('member'))
                else:
                    return redirect(url_for('error',message="帳號或密碼輸入錯誤"))
            except:
                return redirect(url_for('error',message="帳號或密碼輸入錯誤"))

    return render_template('signin.html')

@app.route('/square',  methods = ['POST'])
def square_():
    inputint = request.form['inputint']
    url = '/square/' + inputint
    return redirect(url)


@app.route('/member')
def member():
    if session['user_login'] == True:
        return render_template('member.html')
    else:
        return redirect(url_for('signin'))


@app.route('/square/<int:inputint>')
def square(inputint):    
    square_result = inputint * inputint
    return render_template('square.html', square_result = square_result)

 
@app.route('/signout')
def signout():
    session['user_login'] = False
    return redirect(url_for('signin'))


@app.route('/error', methods = ['GET','POST'])
def error():
    return render_template('error.html')





