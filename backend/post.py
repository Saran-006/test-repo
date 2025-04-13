import psycopg2
conn=psycopg2.connect(dbname="ecom",host="127.0.0.1",port="7070",user="postgres",password="7070")
cur=conn.cursor()
cur.execute("SELECT * FROM user_data")
a=cur.fetchall()
for i in a:
    print(i)