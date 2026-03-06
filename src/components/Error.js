import { Link } from "react-router-dom";

const Error = () => {
    return(
        <div className="Error">
            <h1>404 </h1>
        <h2>You were looking for a page.
I was looking for her, we both failed.</h2>
        <Link to="/"><h3>Lets go back to HOME</h3></Link>
        </div>
    );
};


export default Error;