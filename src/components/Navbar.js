import React from 'react'

import logo from "../image/LionLogo.jpg"
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate()
    // const handleClick = () => {
    //     navigate("/userDetails")
    // }

    return (
        <div className='navBar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='LoginLogout'>
                {/* <button onClick={handleClick}>Login</button> */}
                {props.btn}
            </div>
        </div>
    )
}

export default Navbar