import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, onChangeName] = useInputField('');
    const [password, onChangePassword] = useInputField('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, password);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" defaultValue={name} onChange={onChangeName} name="name" placeholder='enter your name' id="" />
                <br />
                <input type="password" defaultValue={password} onChange={onChangePassword} name="password" placeholder='enter your password' id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;