import React from 'react';

const SignIn = () => {
  const openModal = () => {
    document.getElementById('id01').style.display = 'block';
  };

  const closeModal = () => {
    document.getElementById('id01').style.display = 'none';
  };

  const handleOutsideClick = (event) => {
    const modal = document.getElementById('id01');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  return (
    <div>
      <h2>SignIn</h2>

        <form
          className="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              width={100}
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
              />{' '}
              Remember me
            </label>
          </div>

          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <button
              type="button"
              onClick={closeModal}
              className="cancelbtn"
            >
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      
    </div>
  );
};

export default SignIn;
