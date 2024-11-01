import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);
export const CountContext = createContext(0);

const Grandpa = () => {
    const asset = 'diamond';
    const [money,setMoney] = useState(1000);
    const [count,setCount] = useState(0)
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
           <CountContext.Provider value={[count,setCount]}>
           <MoneyContext.Provider value={[money,setMoney]}>
           <AssetContext.Provider value="gold">
           <section className=" flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
            </section>
           </AssetContext.Provider>
           </MoneyContext.Provider>
           </CountContext.Provider>
        </div>
    );
};

export default Grandpa;