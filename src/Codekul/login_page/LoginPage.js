import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    user1: {
      username: 'sudarshan',
      password: 'password'
    },
    user2: {
      username: 'john',
      password: 'password'
    },
    user3: {
      username: 'ritesh',
      password: 'password'
    },
    user3: {
      username: 'abhi',
      password: 'password'
    }
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validUser = Object.values(credentials).find(user => user.username === username && user.password === password);
    if (validUser) {
      navigate(`/dashboard/${validUser.username}`);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;
