const photo = new URL("../utils/images/photo.png", import.meta.url).href;
const YT = new URL("../utils/images/yt.svg", import.meta.url).href;
const IG = new URL("../utils/images/ig.svg", import.meta.url).href;
const GH = new URL("../utils/images/gh.svg", import.meta.url).href;
const LI = new URL("../utils/images/li.svg", import.meta.url).href;


const Contact = () => {
    return (
        <div className="Contact">
            <div className="banner">
                <h1>Thank you for visiting my poetry space.</h1>
                <p>Feel free to reach out or just say “Hello”</p>
            </div>
            <div className="social-media">
                <div className="shaayar">
                    <h2>Shaayar</h2>
                    <div className="links">
                        <a href="https://www.youtube.com/@yankoshbadal "target="_blank" rel="noopener noreferrer"><div className="yt"><img src={YT}/> <p>youtube.com/@yankoshbadal</p></div></a>
                        <a href="https://www.instagram.com/yankoshbadal"target="_blank" rel="noopener noreferrer"><div className="ig"><img src={IG}/> <p>instagram.com/yankoshbadal</p></div></a>
                    </div>
                </div>

                <div className="photo"><img src={photo}/></div>

                <div className="coder">
                    <h2>&lt;coder/&gt;</h2>
                    <div className="links">
                        <a href="https://github.com/yankoshbadal"target="_blank" rel="noopener noreferrer"><div className="gh"><img src={GH}/> <p>github.com.yankoshbadal</p></div></a>
                        <a href="https://linkedin.com/in/yankoshbadal"target="_blank" rel="noopener noreferrer"><div className="li"><img src={LI}/> <p>linkedin.com/in/yankoshbadal</p></div></a>
                    </div>
                </div>
            </div>
            <div className="email">yankoshbadal@gmail.com</div>
        </div>
    );
}

export default Contact;