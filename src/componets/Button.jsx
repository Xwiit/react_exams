function Button({ onClick, children }) {
  return (
    <button className="smallBtn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
