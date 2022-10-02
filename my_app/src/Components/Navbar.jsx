import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import{Button} from '@chakra-ui/react';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className='navbar' >
                  <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} /> 
          </Link>
          <img class="img" src="https://assets.interntheory.com/creative/logo.png" alt=""></img>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            marginLeft='67rem'
            fontWeight={600}
            color={'white'}
            bg={'rgb(221, 31, 45)'}
            href={'#'}
            _hover={{
              bg: 'rgb(221, 31, 45)',
            }}>
            Sign Up
          </Button>


        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                   <ul className='nav-menu-items' onClick={showSidebar}>
            <h3>Intern Theory</h3>
             <Link to='#' className='menu-bars'>
                <FaIcons.FaBars/>
              </Link>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
