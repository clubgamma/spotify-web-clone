import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
    return (
        <div className="musicControls">
            <footer>
                <div >
                    <div className="fcontent">
                        <div className="left">
                            <div className="text1">Preview of Spotify</div>
                            <div className="text2">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</div>
                        </div>
                        <div className="right">
                            <div className="footerbtn" type="button"><Link to="/signup" style={{textDecoration: "none", color: "#2e77d0"}}>Sign up free</Link></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Banner;




