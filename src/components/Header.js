import { Link } from "react-router-dom";

const Header = ({language, Setlanguage}) => {
  return (
    <div className="Header">
        <div className="logo-container">Khayaal</div>
      <ul className="nav">
        <Link to = "/"><li className="nav-item">Home</li></Link>
        <Link to = "/audio"><li className="nav-item">Audio</li></Link>
        <Link to = "/contact"><li className="nav-item">Contact</li></Link>
      </ul>
      <div className="lang">
        <div className="lang-btn">
          <select value={language} onChange={ (e) => Setlanguage(e.target.value)}>
            <option value="hindi">HIN</option>
            <option value="english">ENG</option>
            <option value="urdu">URU</option>
          </select>
        </div>
      
      </div>
    </div>
  );
};

export default Header;