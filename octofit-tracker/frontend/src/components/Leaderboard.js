import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/leaderboard/`
    : '/api/leaderboard/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
    console.log('Leaderboard API endpoint:', apiUrl);
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-success">
          <tr>
            <th>User</th>
            <th>Score</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((l, i) => (
            <tr key={i}>
              <td>{l.user}</td>
              <td>{l.score}</td>
              <td>{l.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
