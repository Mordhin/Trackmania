import * as api from "../api";

export const getSessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSessions();
    dispatch({
      type: "FETCH_SESSIONS",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSession = (session) => async (dispatch) => {
  try {
    const { data } = await api.createSession(session);
    dispatch({
      type: "CREATE_SESSION",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSession = (session) => async (dispatch) => {
  try {
    await api.deleteSession(session._id);

    dispatch({ type: "DELETE_SESSION", payload: session._id });
  } catch (error) {
    console.log(error.message);
  }
};
