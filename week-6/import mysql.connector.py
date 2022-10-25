import mysql.connector


class Database:

    def __init__(self,user,password,database):
        self.user = user
        self.password = password
        self.database = database

    def __repr__(self):
        return f'<Database: {self.database}>'


mydb = Database('root','811223','website')

connection = mysql.connector.connect(user=mydb.user, password=mydb.password,
                              host='127.0.0.1',
                              database=mydb.database)


if connection.is_connected():
    db_Info = connection.get_server_info()
    print("Connected to MySQL Server version ", db_Info)
    cursor = connection.cursor()
    cursor.execute("select database();")
    record = cursor.fetchone()
    print("You're connected to database: ", record)


else:
    print("Error while connecting to MySQL")


mycursor = connection.cursor()

name = 'name'
account = 'vince'
password = 'vince'

#Database command line
#mycursor.execute("SELECT * FROM member")
#myresult = mycursor.fetchall()
print ('sofarsogood')
query = "SELECT * FROM member WHERE username =  %s AND password = %s"

mycursor.execute(query, (account,password))
print ('done')

#connection.commit()

myresult = mycursor.fetchall()


#Display the results
print(myresult[0][1])