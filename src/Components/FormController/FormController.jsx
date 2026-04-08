import React, { useState } from 'react';

const FormController = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('submited form!');

    }

    const changePasswordHandler = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // handle error
        if (password.length < 6) setError('password must be 6 or more!');
        else setError('');
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
            <p style={{color: 'red'}}>
                 {error}
            </p>
        </div>
    );
};

export default FormController;