import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : '/api/workouts/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      })
      .catch(err => console.error('Error fetching workouts:', err));
    console.log('Workouts API endpoint:', apiUrl);
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-danger">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Suggested For</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((w, i) => (
            <tr key={i}>
              <td>{w.name}</td>
              <td>{w.description}</td>
              <td>{w.suggested_for}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
