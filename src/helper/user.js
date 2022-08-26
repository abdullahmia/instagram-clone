const getUser = () => {
  let token = JSON.parse(localStorage.getItem("user"));
  return token;
};

export default getUser;
