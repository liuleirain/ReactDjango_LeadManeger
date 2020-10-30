import React, { useState } from "react";
import { connect } from "react-redux";
import { addLead } from "../../actions/leads";
import PropTypes from "prop-types";

const Form = ({ addLead }) => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead(lead);
    setLead({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="card card-body mt-4 mb-4">
        <h4>新增客户</h4>

        <form onSubmit={handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-auto mt-2">
              <label className="sr-only" for="inlineFormInput">
                姓名
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                id="inlineFormInput"
                placeholder="姓名"
                name="name"
                value={lead.name}
              />
            </div>
            <div className="col-auto ">
              <label className="sr-only" for="inlineFormInputGroup">
                邮箱
              </label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="邮箱"
                name="email"
                value={lead.email}
              />
            </div>
            <div className="col-6 col-auto">
              <label className="sr-only" for="inlineFormInputGroup">
                消息
              </label>
              <textarea
                onChange={handleChange}
                className="form-control"
                placeholder="消息"
                rows="1"
                name="message"
                value={lead.message}
              ></textarea>
            </div>
            <div className="col-auto mt-2">
              <button type="submit" className="btn btn-primary mb-2">
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  addLead: PropTypes.func.isRequired,
};

export default connect(null, { addLead })(Form);
