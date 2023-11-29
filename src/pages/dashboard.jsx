import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! You can display your content and features here.</p>
      <Link to="/projects">
        <button>View Projects</button>
      </Link>
    </div>
  );
}

export default Dashboard;
