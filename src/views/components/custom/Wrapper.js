import { useEffect } from "react";

const Wrapper = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <div>{children}</div>;
};

export default Wrapper;
