export const updateSummary =  () => {
  return async (dispatch, getState) => {
    const api_url = 'http://2.56.8.238:9000/api/summary'
    let response = await fetch(api_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let json = await response.json();
    console.log(json);
    dispatch({ type: 'UPDATE_SUMMARY', payload: json })
  }
}
