# Workout Planning and Logging Application

## Introduction
This application is a proof of concept for a workout planning and logging system. It allows users to input an exercise with sets, reps, and wieght corresponding to that exercise given by the user. It then saves these details into CSV file and stores the data in an SQLite database.

## Features To Implement
- **Workout Planning**: Users can input and save their workout plans based on the day, detailing exercises, sets, reps, and weights.
- **Data Persistence**: Workout plans are saved into CSV files and a SQLite database for easy access and manipulation.
- **User Interface**: A simple UI built with React to input workout plans.

## Technologies
- **Frontend**: React
- **Backend**: Flask (Python)
- **Database**: SQLite
- **Libraries**: SQLAlchemy, pandas, Flask-CORS

## Getting Started

### Prerequisites
- Python 3.8
- Node.js 12.0
  
### Installation

#### Backend Setup
1. Clone the repository and navigate to the backend directory: `cd GymLogBack`
2. Create a virtual environment:
Windows:
  ```
  python -m venv venv
  venv\Scripts\activate
  ```
- macOS/Linux:
  ```
  python3 -m venv venv
  source venv/bin/activate
  ```
3. Install the required dependencies:`pip install -r requirements.txt`
4. Start the Flask application: `python app.py`


#### Frontend Setup
1. Navigate to the frontend directory from the root of the cloned repository:`cd GymLogFront`
2. Create a react application using `npx create-react-app <name>`
3. Install npm packages:`npm install`
4. Start the React application: `npm start`


   

