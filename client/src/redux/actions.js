import axios from "axios";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  LIST_TASK,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";

// Registration

export const signUp = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const res = await axios.post("/user/register", newUser);
    console.log(res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

// Login

export const signIn = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const res = await axios.post("/user/login", user);
    localStorage.setItem("token", res.data.token);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

// add task

export const addTask = (newTask) => async (dispatch) => {
  try {
    const res = await axios.post("/task/addTask", newTask);
    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TASK,
      payload: error.response.data,
    });
  }
};

// get tasks

export const getTask = (task) => async (dispatch) => {
  try {
    const res = await axios.get("/task/getTask", task);
    dispatch({
      type: LIST_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LIST_TASK,
      payload: error.response.data,
    });
  }
};

// edit & complete task

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const res = await axios.put(`/task/updateTask/${id}`, task);
    dispatch({
      type: EDIT_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_TASK,
      payload: error.response.data,
    });
  }
};

// delete task

export const deleteTask = (id, task) => async (dispatch) => {
  try {
    const res = await axios.delete(`/task/deleteTask/${id}`, task);
    dispatch({
      type: DELETE_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK,
      payload: error.response.data,
    });
  }
};

// filter tasks
