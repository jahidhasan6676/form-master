import Friends from "../Friends/Friends";
import Special from "../Special/Special";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <h4>{name}</h4>
            <section>
               {asset && <Special asset={asset}> </Special>}
               {name === 'Maso' && <Friends></Friends>}
            </section>
        </div>
    );
};

export default Cousin;