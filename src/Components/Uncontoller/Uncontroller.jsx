import React, { useRef } from 'react';

const Uncontroller = () => {

    const nameRef = useRef('');
    const passwordRef = useRef('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        const pass = passwordRef.current.value;
        const passe = nameRef.current.value;
        console.log(pass,  passe);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <input type="text" ref={nameRef} name="name" placeholder='enter your password' id="" />
                <br />
                <input type="password" ref={passwordRef} name="password" placeholder='enter your password' id="" />
                <br />
                <input type="submit" value="submit" />


            </form>
        </div>
    );
};

export default Uncontroller;