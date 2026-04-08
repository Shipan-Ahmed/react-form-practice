import React from 'react';

const SimpleForm = () => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handlerSubmit} >
                <input type="text" name='name' placeholder='Enter your name' />
                <br />
                <input type="email" name='email' placeholder='Enter your email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;