import useCustomState from "../../Hooks/useCustomState";


const CustomHook = () => {
    const name = useCustomState('jahid');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...name} type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomHook;