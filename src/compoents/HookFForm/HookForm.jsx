import useInputState from "../../Hooks/UseInputState";




const HookForm = () => {
    // const [name, handleNameChange] = useInputState('jahid hooked')
    const emailChange = useInputState('jahid@go')

    const handleSubmit = e =>{
        console.log('form data', emailChange.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange}  type="text" name="name"/> */}
                <br />
                <input {...emailChange} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;