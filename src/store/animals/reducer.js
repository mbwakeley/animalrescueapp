import {
  FETCH_ALL_ANIMALS_PENDING,
  ADD_ANIMAL_PENDING,
  REMOVE_ANIMAL_PENDING,
  FETCH_ONE_ANIMAL_PENDING,
  FETCH_ALL_ANIMALS_FAILED,
  FETCH_ONE_ANIMAL_FAILED,
  ADD_ANIMAL_FAILED,
  REMOVE_ANIMAL_FAILED,
  FETCH_ALL_ANIMALS_SUCCESS,
  ADD_ANIMAL_SUCCESS,
  REMOVE_ANIMAL_SUCCESS,
  EDIT_ANIMAL_SUCCESS,
  EDIT_ANIMAL_PENDING,
  EDIT_ANIMAL_FAILED,
  FETCH_ONE_ANIMAL_SUCCESS
} from "./constants";

const initialState = {
  all: [],
  one: {},
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ANIMALS_PENDING:
    case ADD_ANIMAL_PENDING:
    case REMOVE_ANIMAL_PENDING:
    case FETCH_ONE_ANIMAL_PENDING:
    case EDIT_ANIMAL_PENDING:
      return state;

    case FETCH_ALL_ANIMALS_FAILED:
    case FETCH_ONE_ANIMAL_FAILED:
    case ADD_ANIMAL_FAILED:
    case REMOVE_ANIMAL_FAILED:
    case EDIT_ANIMAL_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case FETCH_ALL_ANIMALS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case FETCH_ONE_ANIMAL_SUCCESS:
      return {
        ...state,
        one: action.payload
      };
    case ADD_ANIMAL_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case REMOVE_ANIMAL_SUCCESS:
      return {
        ...state,
        all: state.all.filter(animal => animal.id !== action.payload.id)
      };

    case EDIT_ANIMAL_SUCCESS:
      return {
        ...state,
        editAnimalId: action.payload
      };

    default:
      return state;
  }
};
