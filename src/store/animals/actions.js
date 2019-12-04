import axios from "axios";
import {
  FETCH_ALL_ANIMALS_PENDING,
  BASE_URL,
  FETCH_ALL_ANIMALS_SUCCESS,
  FETCH_ALL_ANIMALS_FAILED,
  FETCH_ONE_ANIMAL_FAILED,
  FETCH_ONE_ANIMAL_PENDING,
  FETCH_ONE_ANIMAL_SUCCESS,
  ADD_ANIMAL_FAILED,
  ADD_ANIMAL_PENDING,
  ADD_ANIMAL_SUCCESS,
  REMOVE_ANIMAL_PENDING,
  REMOVE_ANIMAL_SUCCESS,
  REMOVE_ANIMAL_FAILED,
  EDIT_ANIMAL_SUCCESS,
  EDIT_ANIMAL_PENDING,
  EDIT_ANIMAL_FAILED
} from "./constants";

export const fetchAllAnimals = () => async dispatch => {
  dispatch({
    type: FETCH_ALL_ANIMALS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    console.log("data", response.data);
    dispatch({
      type: FETCH_ALL_ANIMALS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ALL_ANIMALS_FAILED,
      payload: err
    });
  }
};

export const fetchOneAnimal = id => async dispatch => {
  dispatch({
    type: FETCH_ONE_ANIMAL_PENDING
  });
  try {
    let response = await axios.get(BASE_URL + `/${id}`);
    dispatch({
      type: FETCH_ONE_ANIMAL_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ONE_ANIMAL_FAILED,
      payload: err
    });
  }
};

export const addAnimal = newAnimal => async dispatch => {
  dispatch({
    type: ADD_ANIMAL_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newAnimal);
    dispatch({
      type: ADD_ANIMAL_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: ADD_ANIMAL_FAILED,
      payload: err
    });
  }
};

export const removeAnimal = id => async dispatch => {
  dispatch({
    type: REMOVE_ANIMAL_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: REMOVE_ANIMAL_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: REMOVE_ANIMAL_FAILED,
      payload: err
    });
  }
};

export const editAnimal = (id, updatedAnimal) => async dispatch => {
  console.log("editAnimalId", id);
  dispatch({
    type: EDIT_ANIMAL_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedAnimal);
    dispatch({
      type: EDIT_ANIMAL_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: EDIT_ANIMAL_FAILED,
      payload: err
    });
  }
};
