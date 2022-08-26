const Image = ({ src, classname }) => {
  return (
    <img
      src={`${process.env.REACT_APP_CLOUDINARY_IMAGE_LINK}/${src}`}
      className={classname}
      loading="lazy"
      alt="pic"
    />
  );
};

export default Image;
