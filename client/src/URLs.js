let URLs = {};

if (process.env.NODE_ENV === "production") {
  URLs = {
    baseURL: " https://thoughtserver.herokuapp.com/api/thought",
  };
} else {
  URLs = {
    baseURL: "http://localhost:5000/api/thought",
  };
}

export default URLs;
