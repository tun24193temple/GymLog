# Workout Planning and Logging Application
## Project Abstract
The aim of the Workout Planning and Logging Application is to provide users with an easy experience in organizing and tracking their fitness routines through user-friendly planning and logging features.
The core functionality allows users to construct detailed workout plans, categorize them based on muscle groups or exercise types, and log workout data against these plans. The application supports the creation of CSV files that serve as both a digital logbook and a progress tracker. This project would target users who enjoy structuring parts of their life with spreadsheets. The application might be useful to people who bring a notebook to the gym and would rather digitize that experience. 
This project is based off how I manually log my training in Excel spreadsheets. This project aims to automate that process.
## Conceptual Design
### System Overview:
The application will be composed of two main modules: Planning Module and Logging Module. Users will interact with a user interface that will navigate the user between these two modules.
#### Planning Module:
•	UI: Users will input the details of their workout plan. The interface will prompt users to input a title for this day e.g. chest, back, legs etc. It will also have columns for the exercise names, sets, reps, and weight. Not all exercises use weights, some are timed, and others are circuits involving multiple movements. 
•	Database: A relational database that stores user-created workout plans with the ability to retrieve them for logging purposes. Each plan will be associated with a unique ID which is the title the user sets when creating a plan. For example, the title can be Chest but if the user wishes to have variations in his chest days, he/she can create other plans called Chest1, Chest2 or virtually anything else as long as it does not match with an existing plan. 
•	Plan Generator: A backend process that will take user inputs and generates a structured plan for the day, which is then stored in a database.
#### Logging Module:
•	Plan Selector: An interface element that allows users to select a pre-existing plan from the database.
•	Performance Logger: A feature within the UI where users can log the actual performance data, including actual weights lifted, reps completed, and duration of timed exercises.
•	CSV Generator: A utility that takes the logged workout data and exports it into a CSV file, mirroring the structure of the workout plan with additional columns for actual performance metrics.
#### Data Flow
1.	Users enter the Planning Module to create a new workout plan for the day.
2.	Upon submission, the Plan Generator processes the input and stores it in the database.
3.	When logging a workout, the user selects a plan via the Workout Selector in the Logging Module.
4.	The User enters performance data into the Performance Logger.
5.	The CSV Generator compiles the plan and logged data into a CSV file, which can be saved or exported.
## Background
There are many apps within the fitness industry that track fitness progression. They might even include dieting plans and workout plans. My app is different as its focus is towards users who prefer to have a spreadsheet for many things in their lives whether it be budgeting, trip planning, or fitness tracking. Strava for instance is a running-tracking app that records the miles you run in a particular workout out and even lets you compete with your friends’ times. MyFitnessPal is more of a nutrition guide and tracker. 
My app is much simpler. It is based off how I manually track my progress in the gym. I have a csv file that stores all my workout plans. I borrow from that file when I complete one of those routines in a given day and I compare what I accomplished that day to the goals I set when I made the routine. For instance, a leg day would have around 5-8 exercises with each having a set, rep, and weight that I set as goals. My actual progress is logged in a separate CSV file in which I compare my actual numbers to the goals outlined in my routine CSV file. I want to make this process simpler by automating the generation of these Logging files and Planning files. My app is not a fitness app, just a spreadsheet generator for fitness routines. 
I am not sure if there are any direct open or closed source comparisons online. I plan to use my knowledge on python’s Pandas and CSV modules and my past experience logging workouts in spreadsheets to implement this project.

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


   

