import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

const Register = ({ register, createMessage, isAuthenticated }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      createMessage({ passwordNotMatch: "两次密码不一致" });
    } else {
      const user = { username, email, password };
      register(user);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">注册</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>邮箱</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>确认密码</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={handleChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              注册
            </button>
          </div>
          <p>
            已经有账号了! <Link to="/login">登录</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
