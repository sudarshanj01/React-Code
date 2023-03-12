import { DataObject } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [credentials] = useState({
    user1: {
      username: 'sudarshan',
      password: 'password'
    },
    user2: {
      username: 'john',
      password: 'password'
    },
    user3: {
      username: 'Ram',
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
    console.log(validUser);
    if (validUser) {
      navigate(`/dashboard/${validUser.username}`);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div>
        <label>UserName:</label>
        <input type="text" value={username} onChange={handleUsernameChange}></input>

        <label >password:</label>
        <input type="password" value={password} onChange={handlePasswordChange}></input>
        
        <button onClick={handleSubmit}>LOGIN</button>


    </div>
  )
}

export default LoginPage;
