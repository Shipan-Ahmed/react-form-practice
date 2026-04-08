import React, { useState } from 'react';

const FormController = () => {

    const [password, setPassword] = useState('fghsdgdsf');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submited form!');

    }

    const changePasswordHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <input type="text" name='nmae' placeholder='Enter your name' required />
                <br />
                <input type="password" name="password" placeholder='enter your password' id="" required  defaultValue={password} onChange={changePasswordHandler} />
                <br />
                <input type="submit" value="submit" />


            </form>
        </div>
    );
};

export default FormController;