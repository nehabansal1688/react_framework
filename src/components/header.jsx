import React from 'react';
import { Link } from 'react-router-dom';
import localization from '../localization/localization.jsx';

class Header extends React.Component {
  renderLogo(name) {
    return <div className="brand-logo center">{name}'s React learning</div>
  }
 
  render(){
    return (
      <div className="navbar-fixed">
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          {this.renderLogo(this.props.name)}
          <ul>
            <li><Link to="/">{localization.home}</Link></li>
            <li><Link to="/about">{localization.about}</Link></li>
            <li><Link to="/contact">{localization.contact}</Link></li>
            <li><Link to="/list">{localization.list}</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}
export default Header;
