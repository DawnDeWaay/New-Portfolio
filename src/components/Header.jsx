const Header = ({ toggleDarkMode }) => {
  return (
    <div className="header">
      <h2>🦋 Don DeWaay III</h2>
      <button onClick={toggleDarkMode}>Hi</button>
    </div>
  );
};

export default Header;
