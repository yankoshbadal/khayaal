const calendar = new URL("../utils/images/Calendar.svg", import.meta.url).href;
const copy = new URL("../utils/images/Copy.svg", import.meta.url).href;

const ShayariCard = ({poem, bgColor}) => {

    const copyText = ()=>{
        const text = poem.poem_hindi + "\n\n" + poem.author;
        navigator.clipboard.writeText(text);
        alert("Text Copied");
        
    };
    return (
        <div className="ShayariCard" style={{ backgroundColor: bgColor }}>
            <div className="poem" id="shayari">
                <p style={{ whiteSpace: "pre-wrap" }}>{poem.poem_hindi}</p>
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