from config import db

class Grade(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    course = db.Column(db.String(100), nullable=False)  # Course name
    instructor = db.Column(db.String(100), nullable=False)  # Instructor name
    average = db.Column(db.Float, nullable=False)  # Average grade
    total_students = db.Column(db.Integer, nullable=False)  # Total students

    def __repr__(self):
        return f"<Grade {self.course} - {self.instructor}>"

