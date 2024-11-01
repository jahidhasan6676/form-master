import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Sojib"} asset={asset}></Cousin>
                <Cousin name={"Amir"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;