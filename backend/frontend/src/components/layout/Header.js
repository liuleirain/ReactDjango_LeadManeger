import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Header = ({ isAuthenticated, logout, user }) => {
  const hasLogged = () => (
    <>
      <li className="nav-item">
        <span className="nav-link">欢迎，{user.username}</span>
      </li>
      <li className="nav-item">
        <a href="" onClick={logout} className="nav-link block">
          登出
        </a>
      </li>
    </>
  );

  const notLogin = () => (
    <>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          注册
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          登录
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="">
          客户管理
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav ml-auto mt-lg-0">
          {isAuthenticated ? hasLogged() : notLogin()}
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Header);
