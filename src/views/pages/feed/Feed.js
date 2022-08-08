import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Wrapper from "../../components/custom/Wrapper";

const Feed = () => {
  return (
    <Wrapper title={"Instagram"}>
      <Header />
      <div className="container mx-auto px-8 flex gap-5">
        <div className="bg-gray-500 w-[490px]">
          <h3>This feed</h3>
        </div>
        <div className="w-[383px]">
          <Sidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default Feed;
