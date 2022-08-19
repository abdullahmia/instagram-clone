import Header from "../../components/common/Header";
import Wrapper from "../../components/custom/Wrapper";

const Post = () => {
  return (
    <Wrapper title={"Post title is goes here..."}>
      <Header />
      <div className="container mx-auto">
        <h3>Post will go here.</h3>
      </div>
    </Wrapper>
  );
};

export default Post;
