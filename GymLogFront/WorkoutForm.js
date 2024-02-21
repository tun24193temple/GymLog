import React, { useState } from 'react';

function WorkoutForm() {
  const [workout, setWorkout] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Endpoint where your Flask server is expecting the workout form's request
    const postUrl = 'http://localhost:5000/submit-workout';
  
    try {
      // Call your Flask backend with the workout state as a JSON payload
      const response = await fetch(postUrl, {
        method: 'POST', // POST method to send data
        headers: {
          'Content-Type': 'application/json', // Indicate JSON data is being sent
        },
        body: JSON.stringify(workout), // Stringify the form's workout state to send as body payload
      });
      // Wait for the response from the server and convert it to JSON
      const responseBody = await response.json();
      // Output the response from the server to the console (or handle as needed)
      console.log(responseBody);
      // Alert or notify the user of the request's outcome
      alert('Workout saved successfully!');
    } catch (error) {
      // Handle or log errors in the post request
      console.error('Failed to save workout: ', error);
      // Output more notification on the action failure
      alert('Failed to save workout.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Exercise Name"
        value={workout.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="sets"
        placeholder="Sets"
        value={workout.sets}
        onChange={handleChange}
      />
      <input
        type="number"
        name="reps"
        placeholder="Reps"
        value={workout.reps}
        onChange={handleChange}
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight (lbs)"
        value={workout.weight}
        onChange={handleChange}
      />
      <button type="submit">Submit Workout</button>
    </form>
  );
}

export default WorkoutForm;