import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper deep-purple darken-4">
          <a className="brand-logo">Zottik Mail Surveys</a>
          <ul className="right">
            <li>
              <a>Sign-in with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
