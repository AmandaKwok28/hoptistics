# run.py
from flask import render_template, request, redirect, url_for
from config import app, db
from data import Grade

# Route to display all grades
@app.route('/')
def index():
    grades = Grade.query.all()  # Get all grades from the database
    return render_template('index.html', grades=grades)

# Route to add a new grade
@app.route('/add', methods=['GET', 'POST'])
def add_grade():
    if request.method == 'POST':
        course = request.form['course']
        instructor = request.form['instructor']
        average = request.form['average']
        total_students = request.form['total_students']
        
        # Add the new grade to the database
        new_grade = Grade(course=course, instructor=instructor, average=float(average), total_students=int(total_students))
        db.session.add(new_grade)
        db.session.commit()
        return redirect(url_for('index'))  # Redirect to the main page after adding
        
    return render_template('add_grade.html')  # Show form for adding a grade

# Route to delete a grade by its ID
@app.route('/delete/<int:id>', methods=['GET'])
def delete_grade(id):
    grade = Grade.query.get(id)
    if grade:
        db.session.delete(grade)
        db.session.commit()
    return redirect(url_for('index'))  # Redirect to the main page after deleting

if __name__ == "__main__":
    app.run(debug=True)
