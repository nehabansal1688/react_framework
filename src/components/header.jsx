import React from 'react';
import { Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/list">List</Link></li>
          </ul>
        </div>
      </nav>
    </div>
    );
  }
}
export default Header;
