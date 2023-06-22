import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Profile = () => {
    const navigate = useNavigate()

    const Data = localStorage.getItem("userData")
    const retrivedData = JSON.parse(Data)
    // console.log(retrivedData)
    // const { name, contact, email } = retrivedData






    return (
        <div>
            <Navbar btn={<button onClick={() => navigate("/")} >Logout</button>} />
            <p>User Profile</p>
            {retrivedData ?
                <div>
                    <p>User Name: {retrivedData.name} </p>
                    <p>User Contact: {retrivedData.contact}</p>
                    <p>User Email: {retrivedData.email}</p>
                </div>
                : null
            }


            {/* <div>
                <p>User Name: {name} </p>
                <p>User Contact: {contact}</p>
                <p>User Email: {email}</p>
            </div> */}

        </div>
    )
}

export default Profile