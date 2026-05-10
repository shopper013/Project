from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import urllib

app = Flask(__name__)
CORS(app)

# ==========================================
# 1. ตั้งค่าการเชื่อมต่อ SQL Server
# ==========================================
# จากรูป SERVER ของคุณคือ 'Shopper\SQLEXPRESS'
SERVER = r'Shopper\SQLEXPRESS' 
DATABASE = 'Project' # <--- เปลี่ยนเป็นชื่อ Database ของคุณ
USERNAME = 'sa' # ถ้าใช้ Windows Authentication ปล่อยว่างไว้
PASSWORD = 'P@sswOrd'

# กำหนด Connection String (ใช้ Windows Authentication เป็นค่าเริ่มต้น)
# connection_string = f"Driver={{ODBC Driver 17 for SQL Server}};Server={SERVER};Database={DATABASE};Trusted_Connection=yes;"

# หากต้องการใช้ SQL Server Authentication (ใส่รหัสผ่าน) ให้ใช้บรรทัดนี้แทน:
connection_string = f"Driver={{ODBC Driver 17 for SQL Server}};Server={SERVER};Database={DATABASE};UID={USERNAME};PWD={PASSWORD};"

params = urllib.parse.quote_plus(connection_string)
app.config['SQLALCHEMY_DATABASE_URI'] = "mssql+pyodbc:///?odbc_connect=%s" % params
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ==========================================
# 2. สร้าง Models (ตารางในฐานข้อมูลตาม SQL Server)
# ==========================================

class User(db.Model):
    __tablename__ = 'User' # ชื่อตาราง
    __table_args__ = {'schema': 'dbo'} # Schema ปกติคือ dbo
    
    ID = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.NVARCHAR(100))
    password = db.Column(db.NVARCHAR(100), nullable=True) # อิงตามที่ติ๊ก Allow Nulls ไว้ในรูป
    role = db.Column(db.NVARCHAR(50))

class StudentUser(db.Model):
    __tablename__ = 'StudentUser'
    __table_args__ = {'schema': 'dbo'}
    
    UserID = db.Column(db.Integer, primary_key=True)
    ThaiFirstName = db.Column(db.NVARCHAR(300))
    ThaiLastName = db.Column(db.NVARCHAR(300))
    School = db.Column(db.NVARCHAR(100))

class TeacherUser(db.Model):
    __tablename__ = 'TeacherUser'
    __table_args__ = {'schema': 'dbo'}
    
    UserID = db.Column(db.Integer, primary_key=True)
    FirstName = db.Column(db.NVARCHAR(300))
    LastName = db.Column(db.NVARCHAR(300))
    Major = db.Column(db.NVARCHAR(100))

# ยังไม่มีตาราง StaffUser ในฐานข้อมูล ลบโมเดลออกก่อนเพื่อไม่ให้เกิด Error

# ==========================================
# 3. สร้าง API Endpoints (สำหรับการ Login)
# ==========================================

@app.route('/login', methods=['POST'])
def login():
    # รับข้อมูลจาก Frontend
    if request.is_json:
        data = request.json
    else:
        data = request.form

    username_input = data.get('username')
    password_input = data.get('password')

    if not username_input or not password_input:
        return jsonify({'status': 'error', 'message': 'กรุณากรอก Username และ Password ให้ครบถ้วน'}), 400

    try:
        # ค้นหา User จากตาราง dbo.User
        user = User.query.filter_by(username=username_input).first()

        # สำหรับ Student รหัสผ่านใน DB อาจเป็น NULL (None)
        if user and (user.password == password_input or user.password is None):
            # ล็อกอินสำเร็จ! จะตรวจสอบ role และดึงข้อมูลเพิ่มเติมจากตารางอื่น
            user_info = None
            
            if user.role == 'student':
                student = StudentUser.query.filter_by(UserID=user.ID).first()
                if student:
                    user_info = f"{student.ThaiFirstName} {student.ThaiLastName}"
            elif user.role == 'teacher':
                teacher = TeacherUser.query.filter_by(UserID=user.ID).first()
                if teacher:
                    user_info = f"{teacher.FirstName} {teacher.LastName}"
            elif user.role == 'staff' or user.role == 'admin':
                # staff = StaffUser.query.filter_by(UserID=user.ID).first()
                # if staff:
                #     user_info = f"{staff.FirstName} {staff.LastName}"
                pass

            return jsonify({
                'status': 'success',
                'message': 'เข้าสู่ระบบสำเร็จ',
                'data': {
                    'user_id': user.ID,
                    'username': user.username,
                    'role': user.role,
                    'full_name': user_info
                }
            }), 200
        else:
            return jsonify({'status': 'error', 'message': 'Username หรือ Password ไม่ถูกต้อง'}), 401
            
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Database Error: {str(e)}'}), 500

@app.route('/', methods=['GET'])
def home():
    return jsonify({'status': 'online', 'message': 'API สำหรับ SQL Server กำลังทำงาน!'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
