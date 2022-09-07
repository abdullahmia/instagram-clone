import instaImg from "../../../../assets/Instagram.png";

const PageLoader = () => {
  return (
    <div className="w-full min-h-screen background flex justify-center items-center">
      <div>
        <img src={instaImg} className="w-28 animate-pulse" alt="" />
      </div>
    </div>
  );
};

export default PageLoader;
