const api = "http://localhost:5001";

// Generate a unique token for storing data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
  "Content-Type": "application/json",
};

export const getAllCinema = () =>
  fetch(`${api}/cinema`, { headers })
    .then(res => res.json())
    .then(data => data);
    


