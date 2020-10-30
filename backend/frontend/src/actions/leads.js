import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

export const getLeads = () => (dispatch, getState) => {
  axios
    .get(process.env.REACT_APP_API_URL + "/api/leads", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(
      process.env.REACT_APP_API_URL + `/api/leads/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch(createMessage({ leadDelete: "删除客户" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post(
      process.env.REACT_APP_API_URL + `/api/leads/`,
      lead,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
      dispatch(createMessage({ leadAdded: "添加客户" }));
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
