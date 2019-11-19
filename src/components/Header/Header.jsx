import React      from 'react';
import {NavLink}  from 'react-router-dom';
import s          from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="/">
                <img
                    className={s.header_logo}
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
                    alt=""/>
            </NavLink>
            
            
            <div className={s.loginBlock}>
                {
                    props.isAuth ? 
                        <div className={s.rightWrap}>
                            <NavLink to="/" className={s.loginName}>{props.login}</NavLink>
                            <button onClick={props.logoutMe}>Log out</button>
                        </div>
                        
                        : 
                        <NavLink to="/login">Login</NavLink>
                }
               
            </div>

        </header>
    );
}

export default Header;