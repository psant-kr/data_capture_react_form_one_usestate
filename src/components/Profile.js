import React from 'react'

const Profile = () => {
    const Data = localStorage.getItem("userData")
    // const retrivedData = JSON.parse(Data)
    // console.log(retrivedData)

    const {name,contact,email} = JSON.parse(Data)
    


    return (
        <div>
            <p>User Profile</p>
            {/* <div>
                <p>User Name: {retrivedData.name} </p>
                <p>User Contact: {retrivedData.contact}</p>
                <p>User Email: {retrivedData.email}</p>
            </div> */}
            <div>
                <p>User Name: {name} </p>
                <p>User Contact: {contact}</p>
                <p>User Email: {email}</p>
            </div>
        </div>
    )
}

export default Profile