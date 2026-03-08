const calendar = new URL("../utils/images/Calendar.svg", import.meta.url).href;
const copy = new URL("../utils/images/Copy.svg", import.meta.url).href;
import { useOutletContext } from "react-router-dom";

const ShayariCard = ({poem, bgColor}) => {

    const {language} = useOutletContext();
    
    const copyText = ()=>{
        const text = poem[`poem_${language}`] + "\n\n" + poem.author;
        navigator.clipboard.writeText(text);
        alert("Text Copied");
    };
    return (
        <div className="ShayariCard" style={{ backgroundColor: bgColor }}>
            <div className="poem" id="shayari">
                <p style={{ whiteSpace: "pre-wrap" }}>{poem[`poem_${language}`]}</p>
            </div>
            <div className="author">
                <p>{poem.author}</p>
            </div>
            <div className="detail">
                <div className="date"><img src={calendar}/>{poem.date}</div>
                <div className="copy" onClick={() => copyText()}><img src={copy}/><p>COPY</p></div>
            </div>
        </div>
        
    );
}

export default ShayariCard;