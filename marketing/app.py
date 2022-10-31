import mysql.connector
import bcrypt
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
    def __init__(self,name,account,password):
        self.name = name
        self.account = acoount
        self.password = password

    def __repr__(self):
        #__repr__ is the representative of the object. Otherwise, it will be like <object 0x3232323>,,,
        #a better data format called f string
        return f'<User: {self.username}>' #<User: Vince>


class Database:

    def __init__(self,user,password,database):
        self.user = user
        self.password = password
        self.database = database

    def __repr__(self):
        return f'<Database: {self.database}>'

mydb = Database('root','811223','website')

#users = []
#users.append(User(id=1,username='test',password='test'))
        
app = Flask (__name__)
#app.debug = True
app.secret_key = "Thisismysecretkey000000111111"



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/signin', methods = ['POST'])
def signin():
    connection = mysql.connector.connect(user=mydb.user, 
                                            password=mydb.password,
                                            host='127.0.0.1',
                                            database=mydb.database
                                            )
    try:    
            print (connection.is_connected())
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)

    except:
            return redirect(url_for('error', message= "Error while connecting to MySQL"))
    
    #POST = parameter is not embedded into the link

    #remove the user session and start over (if password if wrong)

    session.pop('user_id',None)

    #html name=""
    account = request.form['ac']
    password = request.form['pw']
    password = password.encode('utf-8')

    if account == '' and password == '':
        return redirect('/')
        

    elif account == '' or password == '':
        return redirect(url_for('error',message='請輸入帳號及密碼'))
    
    #if the login account matches any of the accounts in the list
    #there will only one so [0]
    else:
        query = "SELECT * FROM member WHERE username =  %s"
        #Avoid "unread result error"
        mycursor = connection.cursor(buffered=True)

        #Process the password and the salt

        mycursor.execute(query, (account,))
        connection.commit()
        myresult = mycursor.fetchall()

        if len(myresult) == 1:
            salt = myresult[0][4]
            salt = salt.encode('utf-8')
            hashed_pw = bcrypt.hashpw(password,salt)
            hashed_pw = hashed_pw.decode('utf-8')

            if hashed_pw == myresult[0][3]: 
                #let the server get the cookie so that the login status can remain
                session['user_id'] = myresult[0][1]
                session['user_account'] = myresult[0][2]
                session['user_login'] = True
                return redirect('marketing_map')
        
            else:
                return redirect(url_for('error',message="帳號或密碼輸入錯誤"))
        else:
            return redirect(url_for('error',message="帳號或密碼輸入錯誤"))

    return render_template('index.html')


@app.route('/signup', methods = ['POST'])
def signup():
    connection = mysql.connector.connect(user=mydb.user, 
                                            password=mydb.password,
                                            host='127.0.0.1',
                                            database=mydb.database
                                            )
    try:    
        print (connection.is_connected())
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

    except:
        return redirect(url_for('error', message= "Error while connecting to MySQL"))
    
    
    name = request.form['name']
    account = request.form['account']
    password = request.form['password']
    
    if name == '' or account == '' or password == '':
        return redirect('/')


    else:           

        mycursor = connection.cursor(buffered=True)
        query = """Select username FROM member WHERE username = %s"""
        mycursor.execute(query, (account,))
        result = mycursor.fetchall()

        if len(result) != 0:
            return redirect(url_for('error',message="帳號已經存在"))

        else:

            query = """INSERT INTO member (name, username, password) VALUES (%s, %s, %s)"""
            mycursor.execute(query, (name, account, password))
            connection.commit()

            

            return redirect('/')



"""@app.route('/member')
def member():
    if session['user_login'] == True:    
        name = session['user_id']
        return render_template('member.html', name = name)
    else:
        return redirect('/')
"""


@app.route('/marketing_map')
def marketing_map():
    if session['user_login'] == True:    
        name = session['user_id']
        return render_template("marketing_map.html")
    else:
        return render_template('/')


#沒有辦法一次拿完form資料後跳到square/整數，需要中繼站在導一次
"""@app.route('/square',  methods = ['POST'])
def square_():
    inputint = request.form['inputint']
    url = '/square/' + inputint
    return redirect(url)

@app.route('/square/<int:inputint>')
def square(inputint):    
    square_result = inputint * inputint
    return render_template('square.html', square_result = square_result)
"""
 
@app.route('/signout')
def signout():
    session['user_login'] = False
    return redirect('/')


@app.route('/error', methods = ['GET','POST'])
def error():
    return render_template('error.html')


#if __name__ == "__main__":
app.run(port = 3000)


