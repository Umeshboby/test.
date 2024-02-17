import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordValid(value.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password);
  };

  const validateEmail = (email) => {
    // Very basic email validation

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }

  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Email:</label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!emailValid && <div className="error">Invalid email format</div>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!passwordValid && <div className="error">Password must be at least 8 characters long</div>}
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <br></br>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ borderColor: emailValid ? 'green' : 'red' }}
        />
        {!confirmPasswordValid && <div className="error">Passwords do not match</div>}
      </div>
      <button onClick={handleSubmit}
      style={{backgroundColor: (emailValid && passwordValid && confirmPasswordValid) ? "green" : "red"}}>Submit</button>
    </div>
  );
};

export default SignUpForm;