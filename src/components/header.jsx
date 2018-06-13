import React from 'react';
import { Link } from 'react-router-dom';
import localization from '../localization/localization.jsx';

class Header extends React.Component {
  renderLogo(name) {
    return <div className="brand-logo center">{name}'s React learning</div>
  }
 
  render(){
    return (
    <div class="container">
        <div className="navbar-fixed">
        <nav className="teal lighten-2">
          <div className="nav-wrapper">
            {this.renderLogo(this.props.name)}
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="/">{localization.home}</Link></li>
              <li className="list-inline-item"><Link to="/about">{localization.about}</Link></li>
              <li className="list-inline-item"><Link to="/lost">{localization.lost}</Link></li>
              <li className="list-inline-item"><Link to="/list">{localization.list}</Link></li>
              <li className="list-inline-item"><Link to="/fragments">{localization.fragments} </Link></li>
              <li className="list-inline-item"><Link to="/validation">{localization.validation} </Link></li>
              <li className="list-inline-item"><Link to="/contexts">Contexts </Link></li>
              <li className="list-inline-item"><Link to="/ref">Refrences </Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    );
  }
}
export default Header;
