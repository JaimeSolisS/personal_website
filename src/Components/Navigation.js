import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'; 


function Navigation(props) {
    return (
      <NavigationStyled>
          <div className='avatar'>
              <img src="https://avatars.githubusercontent.com/u/26722249?v=4" alt=""/>
          </div>

          <ul className="nav-items">
              <li className="nav-item">
                  <NavLink to="/home" activeClassName="active-class">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/about" activeClassName="active-class">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/projects" activeClassName="active-class">Projects</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
              </li>
          </ul>
        <footer className="footer">
            <p> {new Date().getFullYear() } js </p>
        </footer>
      </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);
.avatar{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center; 
    padding: 1rem 0;
    img {
        width:70%; 
        border-radius: 50%;
        border: 8px solid var(--border-color);
      
    }
}

.nav-items{
    width: 100%;
    text-align: center;

    .active-class{
        background-color: var(--primary-color);
    }

    li{
        display: block;
        a{
            display: block;
            padding: .2rem 0;
            position: relative;
            transition: all 0.4s ;
            &:before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--primary-color);
                transition: All 0.3s cubic-bezier(1,0,0,1);
                opacity: .2;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}

footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    
    p{
        padding: 1rem 0; 
        font-size: 1.1rem;
        display: block;
        text-align: center;

    }
}
`;
export default Navigation;