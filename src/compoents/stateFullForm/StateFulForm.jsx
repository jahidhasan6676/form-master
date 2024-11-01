import { useState } from "react";


const StateFulForm = () => {
    const [email, setEmail] = useState('jh@yeye');
    const [name, setName] = useState('jahid');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
            console.log(email);
            console.log(name);
            console.log(password)
        }
        
    }
    // password change
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    // name change
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    // email change
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={ handleNameChange}  type="text" name="name"/>
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFulForm;