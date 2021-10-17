const Card = ({ title, bgColor, children }) => {
  const style = {
    color: "#f4f5f7",
    minWidth: "160px",
    height: "120px",
    borderRadius: "10px",
    backgroundColor: bgColor,
    cursor: "pointer",
    fontSize: "23px",
    padding: "16px",
    overflowWrap: "break-word",
    textTransform: "capitalize",
    marginBottom: "16px",
    marginRight: "16px",
  };

  return (
    <h3 style={style}>
      {title}
      <h3 style={{ fontSize: "23px" }}>{children}</h3>
    </h3>
  );
};

export default Card;
