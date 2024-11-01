import { useRef } from "react";




const AllFormMethods = ({formTitle,handleSubmit, btnText='Submit'}) => {
    
    const handleOnSubmit = e =>{
        
        e.preventDefault();
        const value = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(value)
    }
    
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleOnSubmit}>
                <input   type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={btnText} />
            </form>
        </div>
    );
};

export default AllFormMethods;