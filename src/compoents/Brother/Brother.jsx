import { useContext } from "react";
import { CountContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [count,setCount] = useContext(CountContext)
    return (
        <div>
            <h2>Brother</h2>
                <p>Count: {count}</p>
                <button onClick={()=>setCount(count + 1)}>Add Count</button>
        </div>
    );
};

export default Brother;