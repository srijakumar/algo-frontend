import axios from 'axios';

export function selectAlgorithm (algorithm) {
  return (dispatch) => {
    console.log(algorithm)
    dispatch({
    type: 'SELECT_ALGO',
    payload: algorithm})
  }
};

export function fetchSomeAlgos() {
  return async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/algorithms/idxe')
  console.log("inside fetch some algos in actions index")
  dispatch({ type: 'FETCH_SOME_ALGOS', payload: response.data })
  }
};

export function fetchAllAlgos() {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/api/v1/algorithms/')
    console.log("inside fetch all algos in actions index")
    dispatch({ type: 'FETCH_ALL_ALGOS', payload: response.data })
    }
};

export const fetchExamples = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_EXAMPLES', payload: "Nothing here" })
  }
};

export const selectExample = () => {
  return dispatch => {
    dispatch({ type: 'SELECT_EXAMPLE', payload: "Nothing here" })
  }
};
