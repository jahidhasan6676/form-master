import { useState } from "react"

const useCustomState = (custom = null) =>{
    const [value, setValue] = useState(custom);

    const onChange = e =>{
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}
export default useCustomState;