const q1 = new URL("../utils/images/q1.svg", import.meta.url).href;
const q2 = new URL("../utils/images/q2.svg", import.meta.url).href;


const QuoteCard = ({Quote}) => {

    return (
        <div className="QuoteCard">
            <center><img src={q1}/></center>
        <p style={{ whiteSpace: "pre-wrap" }}>{Quote}</p>
            <center><img src={q2}/></center>
        </div>
    );
}

export default QuoteCard;