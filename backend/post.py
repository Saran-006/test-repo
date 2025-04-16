a=open("D:\\Saran\\saran-react\\ecom\\test-repo\\backend\\cookies.txt","a")
a.write("hi ")
a.close()
b=open("D:\\Saran\\saran-react\\ecom\\test-repo\\backend\\cookies.txt","r")
x=b.readlines()
for i in x:
    print(i)
b.close()
