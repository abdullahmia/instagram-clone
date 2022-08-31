import { useState } from "react";
import Header from "../../components/common/Header";
import Wrapper from "../../components/custom/Wrapper";

const AddPost = () => {
  const [image, setImage] = useState(null);
  return (
    <Wrapper title={"Abir Islam (@abirislam)"}>
      <Header />
      <div className="container mx-auto">
        <h2>Add Post</h2>
        <input type="file" placeholder="Image" />
      </div>
    </Wrapper>
  );
};

export default AddPost;
