import { useGetPostsQuery } from "../../../redux/services/postService";
import { useSuggestionUsersQuery } from "../../../redux/services/userService";
import Header from "../../components/common/Header";
import PageLoader from "../../components/common/loader/PageLoader";
import Post from "../../components/common/Post";
import Sidebar from "../../components/common/Sidebar";
import Wrapper from "../../components/custom/Wrapper";

const Feed = () => {
  const { data: posts, isLoading: postLoading } = useGetPostsQuery();
  const { isLoading: suggestedLoading } = useSuggestionUsersQuery();
  return (
    <Wrapper title={"Instagram"}>
      {postLoading && suggestedLoading ? (
        <PageLoader />
      ) : (
        <>
          <Header />
          <div className="container mx-auto px-12 flex gap-8 mt-5">
            <div className="lg:w-[490px] w-[430px]">
              <div>{/* Stories */}</div>
              <div className="flex flex-col gap-4">
                {posts?.map((post, key) => (
                  <Post key={key} post={post} />
                ))}
              </div>
            </div>
            <div className="w-[383px] lg:block hidden">
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Feed;
