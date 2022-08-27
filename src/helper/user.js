const getUser = () => {
  let token = JSON.parse(localStorage.getItem("user"));
  if (!token.image) {
    token = { ...token, image: "user_cowfsl" };
  }
  return token;
};

export default getUser;
