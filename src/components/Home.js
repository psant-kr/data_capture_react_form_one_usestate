import React, { useState } from 'react'



const Home = () => {
    const [form, setForm] = useState({ name: "UserName", contact: "99999999", email: "User@Email" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        // setForm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // we have to apply this stringify to store the object in the local storage
        localStorage.setItem("userData",JSON.stringify(form))
        console.log(form)

    }

    return (
        <div>
            {/* note we can use both onSubmit on form and onClick on button to trigger the handleSubmit function  */}
            <form
            //  onSubmit={handleSubmit}
            >
                <label>name</label>
                <input type='text' name='name' value={form.name} placeholder='name' onChange={handleChange} />
                <label>contact</label>
                <input type='number' name='contact' value={form.contact} placeholder='contact' onChange={handleChange} />
                <label>email</label>
                <input type='email' name='email' value={form.email} placeholder='email' onChange={handleChange} />
                <button type='submit' onClick={handleSubmit} >submit</button>
            </form>
        </div>
    )
}

export default Home