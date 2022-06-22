const Slogan = () => {
  const renderedSlogan = ["your", "success", "is", "our", "mission"].map(
    (word) => {
      return (
        <div className="t-2" key={word}>
          {word}
        </div>
      );
    }
  );

  return <div className="t-2">{renderedSlogan}</div>;
};

export default Slogan;
