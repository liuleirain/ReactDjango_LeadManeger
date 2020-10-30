import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";
import PropTypes from "prop-types";

const Leads = ({ getLeads, deleteLead, leads }) => {
  useEffect(() => {
    getLeads();
  }, []);

  return (
    <>
      <h4>客户列表</h4>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">姓名</th>
            <th scope="col">邮箱</th>
            <th scope="col">消息</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="btn btn-danger btn-sm"
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Leads.propTypes = {
  getLeads: PropTypes.func.isRequired,
  deleteLeads: PropTypes.func.isRequired,
  leads: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
