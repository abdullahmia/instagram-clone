import Header from "../../components/common/Header";
import Post from "../../components/common/Post";
import Sidebar from "../../components/common/Sidebar";
import Wrapper from "../../components/custom/Wrapper";

const Feed = () => {
  return (
    <Wrapper title={"Instagram"}>
      <Header />
      <div className="container mx-auto px-8 flex gap-5 mt-5">
        <div className="lg:w-[490px] w-[430px]">
          <div>{/* Stories */}</div>
          <div className="flex flex-col gap-4">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="w-[383px] lg:block hidden">
          <Sidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Feed;
