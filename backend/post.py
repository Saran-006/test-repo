# a=open("D:\\Saran\\saran-react\\ecom\\test-repo\\backend\\cookies.txt","a")
# a.write("hi ")
# a.close()
# b=open("D:\\Saran\\saran-react\\ecom\\test-repo\\backend\\cookies.txt","r")
# x=b.readlines()
# for i in x:
#     print(i)
# b.close()
import os
import time
import threading
def cc():
    while 1==1:
        os.system("color 0a")
        time.sleep(1)
        os.system("color 9")
        time.sleep(1)
t=threading.Thread(target=cc)
t.start()
for i in range(10):
        time.sleep(1)
        print("hello world")