import React, { useState } from 'react';

function log_in() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Create history object

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login for demonstration purposes
    // Replace this with your actual login logic

    // Assuming successful login, navigate to the dashboard
    // You can also conditionally redirect based on your actual logic
    if (email === 'user@example.com' && password === 'password') {
      history.push('/dashboard'); // Redirect to the dashboard route
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default log_in;
