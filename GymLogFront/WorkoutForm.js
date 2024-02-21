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
    // Endpoint where Flask server is expecting workout form's request
    const postUrl = 'http://localhost:5000/submit-workout';
  
    try {
      // Call Flask backend with the workout state
      const response = await fetch(postUrl, {
        method: 'POST', // POST method to send data
        headers: {
          'Content-Type': 'application/json', // Indicate JSON data is being sent
        },
        body: JSON.stringify(workout), // Stringify the form's workout state to send as body payload
      });
      // Wait for response from the server and convert it to JSON
      const responseBody = await response.json();
      // Output response from server to console
      console.log(responseBody);
      // Alert the user
      alert('Workout saved successfully!');
    } catch (error) {
      console.error('Failed to save workout: ', error);
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
