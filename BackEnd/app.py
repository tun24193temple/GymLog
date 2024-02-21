import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///workouts.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Model definition
class Workout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    sets = db.Column(db.Integer, nullable=False)
    reps = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Float, nullable=True)  # Assuming weight can be null

# Create the database and tables if they don't exist

@app.route('/submit-workout', methods=['POST'])
def submit_workout():
    workout_data = request.json
    # Save to CSV
    df = pd.DataFrame([workout_data])
    df.to_csv('workouts.csv', mode='a', index=False, header=False)
    # Also insert into database
    new_workout = Workout(name=workout_data['name'], sets=workout_data['sets'],
                          reps=workout_data['reps'], weight=workout_data.get('weight'))
    db.session.add(new_workout)
    db.session.commit()
    return jsonify({"message": "Workout data received, saved to CSV, and stored in database!"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
