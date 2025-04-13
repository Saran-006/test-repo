import psycopg2
import random
def phash(p):
    n=len(p)
    hash=[]
    for i in p:
        hash.append(chr(ord(i)+n))
    return("".join(hash))


def loginEntry(u,e,p):
    connection=psycopg2.connect(dbname="ecom",host="127.0.0.1",port="7070",user="postgres",password="7070")
    cursor=connection.cursor()
    cursor.execute("INSERT INTO user_data (NAME,EMAIL,PASSWORD,PROFILEPIC,PREMIUM,SAVEDADDRESS) VALUES (%s,%s,%s,'user.jpg','No','none')",(u,e,phash(p)))
    connection.commit()
    connection.close()
    return 


def logauth(e,p):
    connection=psycopg2.connect(dbname="ecom",host="127.0.0.1",port="7070",user="postgres",password="7070")
    cursor=connection.cursor()
    cursor.execute('SELECT * FROM user_data WHERE EMAIL=%s AND PASSWORD=%s',(e,p))
    i=cursor.fetchall()
    print(i,p)
    connection.close()
    if len(i)<1:
        return "false"
    else:
        return "true"
    
def acc(e):
    connection=psycopg2.connect(dbname="ecom",host="127.0.0.1",port="7070",user="postgres",password="7070")
    cursor=connection.cursor()
    cursor.execute('SELECT * FROM user_data WHERE EMAIL=%s',(e,))
    r=cursor.fetchone()
    connection.close()
    details=[]
    details.extend([r[1],r[4]])
    x=str(details)[1:-1]
    result=[]
    for i in x:
        if i==',':
            result.append(' ')
        elif i=="'":
            continue
        else:
            result.append(i)
    return("".join(result))

def generate():
    s=[]
    for i in range(6):
        s.append(random.choice("abcdefghijklmonpqrstuvwxyz1234567890QWERTYUIOPASDFGHJKLZXCVBNM"))
    return("".join(s))