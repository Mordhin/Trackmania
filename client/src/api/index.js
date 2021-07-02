import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchSessions = () => API.get("/sessions");
export const createSession = (newSession) => API.post("/sessions", newSession);
// export const updateSession = (updatedSession) => API.patch("/sessions/${id}", updatedSession);
export const deleteSession = (id) => API.delete(`/sessions/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
