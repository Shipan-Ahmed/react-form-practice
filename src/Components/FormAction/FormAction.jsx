import React from 'react';

const FormAction = () => {

    const actionHandler = (e) => {
        console.log(e.get('name'));
        console.log(e.get('email'));
    }

    return (
        <div>
            <form action={actionHandler}>
                <input type="text" name="name" placeholder='enter name' id="" />
                <br />
                <input type="email" name="email" placeholder='enter your email' id="" />
                <br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default FormAction;