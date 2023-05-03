import Logo from "./Logo";
import './NavItems.css'
import NavLink from '../../components/ui/NavLink';

import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext, LoginStatus } from "../../context/UserContext";

import { deleteTokens } from "../../manage-tokens";
import BurgerMenu from "./BurgerMenu";
import Burger from "./Burger";

type Props = {
    children?: React.ReactNode
}

const NavItems = () => {

    const navigate = useNavigate();
    const { userPayload, loginStatus, setUserDataByDispatch,  } = useContext(UserContext);
    
    const BurgerEl = (document.getElementsByClassName("Burger") as HTMLCollectionOf<HTMLElement>)
    const BurgerMenuEl = (document.getElementsByClassName("BurgerMenu") as HTMLCollectionOf<HTMLElement>)
    const menuItemsEl = (document.getElementsByClassName("Items") as HTMLCollectionOf<HTMLElement>)
    const darkthemeEl = (document.getElementsByClassName("darktheme") as HTMLCollectionOf<HTMLElement>)

    const leaveBurgerMenu = (document.getElementsByClassName("LeaveBurgerMenu") as HTMLCollectionOf<HTMLElement>)
    
    return (
        <>
        <div className="NavItemsContainer">
            <Logo />

            <div className="BurgerMenu">
                <BurgerMenu>

                    <div className="LeaveBurgerMenu" onClick={() => {
                        
                         BurgerEl[0].style.display = "flex";
                         BurgerMenuEl[0].style.display = "none";
                         menuItemsEl[0].style.display = "none";
                         darkthemeEl[0].style.display = "none";
                        leaveBurgerMenu[0].style.display = "none"}}>
                         
                    </div>

                    <NavLink href="/aboutUS" active>
                        <p>About Us</p>
                    </NavLink>

                    <NavLink href="/Education" active>
                        <p>Education</p>
                    </NavLink>

                    {loginStatus == LoginStatus.LoggedOut &&  <NavLink href="/login" active>
                        <p onClick={() => {navigate("/login");}}>Authorization</p>
                    </NavLink>}

                    <NavLink href="/settings" active>
                        <p>Settings</p>
                    </NavLink>  

                    {loginStatus == LoginStatus.LoggedIn && <>
                        <NavLink href={"/account/" + userPayload.user_id} active><p>Account</p></NavLink> 
                        <NavLink href="/login" active>
                        <p onClick={() => {setUserDataByDispatch("LOGOUT", null)
                        deleteTokens()
                        navigate("/login");}}>Exit</p>
                    </NavLink>
                    </>
                    }
                </BurgerMenu>
                    
            </div>

            <Burger/>

        </div>
        </>
    );
};

export default NavItems;