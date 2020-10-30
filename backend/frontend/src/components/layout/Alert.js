import React, { useEffect } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alert, error, message }) => {
  useEffect(() => {
    if (error.msg.name) {
      alert.error("Name: " + error.msg.name);
    }
    if (error.msg.email) {
      alert.error("Email: " + error.msg.email);
    }
    if (error.msg.message) {
      alert.error("Message: " + error.msg.message);
    }
    if (error.msg.non_field_errors) {
      alert.error("账号或密码错误！");
    }
    if (error.msg.username) {
      alert.error(error.msg.username);
    }
  }, [error]);

  useEffect(() => {
    if (message.leadAdded) {
      alert.success(message.leadAdded);
    }
    if (message.leadDelete) {
      alert.info(message.leadDelete);
    }
    if (message.passwordNotMatch) {
      alert.info(message.passwordNotMatch);
    }
  }, [message]);

  return <></>;
};

Alert.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps, null)(withAlert()(Alert));
