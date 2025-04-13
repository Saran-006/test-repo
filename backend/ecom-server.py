from flask import Flask,send_from_directory,request,make_response
from flask_cors import CORS 
import ecom_logic
ecom=Flask(__name__)
CORS(ecom,supports_credentials=True)

cookies=set()
cookie_email={}
@ecom.route("/logent",methods=['GET','POST'])
def login_entry():
    if request.method=='GET':
        u,e,p=request.args.get('u'),request.args.get('e'),request.args.get('p')
        return ecom_logic.loginEntry(u,e,p)
    else:
        return "forbidden"

@ecom.route("/logauth",methods=['GET','POST'])
def login_authentication():
    if request.method=='GET':
        e,p=request.args.get('e'),request.args.get('p')
        if(ecom_logic.logauth(e,p)=='true'):
            res=make_response("true")
            cookie=ecom_logic.generate()
            while cookie in cookies:
                cookie=ecom_logic.generate()
            res.set_cookie("cookie",cookie,max_age=3600)
            cookies.add(cookie)
            cookie_email[cookie]=e
            return res
        else:
            return "false"
    else:
        return "forbidden"
    
@ecom.route('/logchk',methods=['GET','POST'])
def log_check():
    if request.method=='GET':
        if request.cookies.get("cookie") in cookies:
            print(request.cookies.get("cookie"),cookies)
            return "true"
        else:
            print(request.cookies.get("cookie"),cookies)
            return "false"
    else:
        return "forbidden"
ecom.run(debug=True)