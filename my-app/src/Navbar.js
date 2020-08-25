import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id='nav'>
          <li>
            <a href='#'>Navbar</a>
          </li>
          <li>
            <a href='#'>Header</a>
          </li>
          <li>
            <a href='#'>Footer</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
