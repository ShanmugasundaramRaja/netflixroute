import { Component } from "react";
import {Dropdown} from "react-bootstrap"
import {AiOutlineAlignLeft} from "react-icons/ai"
import {BsFillGridFill} from "react-icons/bs"
import "../styles.css"
class Header extends Component {
  render() {
    return (
      <div className="header__wrap">
        <div className='header__inner'>
          <h2>Tv Shows</h2>
          <Dropdown >
            <Dropdown.Toggle id="dropdown-basic" className='dropdown__h'>
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='header__inner'> 
            <AiOutlineAlignLeft className='h__icon'/>
            <BsFillGridFill  className='h__icon'/>
        </div>
      </div>
    );
  }
}

export default Header