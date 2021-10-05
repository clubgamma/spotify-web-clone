import styles from "./Login.module.css";
import Logo from "../../Assets/spotify-logo.png";
import { Link } from "react-router-dom";

const Login = () => (
  <div data-testid="Login" >
    <div data-testid="logoImg" className={styles.header}>
      <img src={Logo} alt="logo" className={styles.logo} />
    </div>

    <div className={styles.container}>
      <h4>To continue, log in to Spotify.</h4>

      {/* Social buttons */}

      <button className={[styles.button, styles.button_facebook].join(" ")}>
        <i class="fab fa-facebook" style={{ marginRight: "10px" }}></i>
        CONTINUE WITH FACEBOOK
      </button>
      <button className={[styles.button, styles.button_apple].join(" ")}>
        <i class="fab fa-apple" style={{ marginRight: "10px" }}></i>
        CONTINUE WITH APPLE
      </button>
      <button className={styles.button}>
        <i class="fab fa-google" style={{ marginRight: "10px" }}></i>
        CONTINUE WITH GOOGLE
      </button>
      <button className={styles.button}>CONTINUE WITH PHONE NUMBER</button>

      <div>
        <span className={styles.or}>OR</span>
      </div>

      {/* Login form */}

      <div className={styles.loginform_wrapper}>
        <div className={styles.loginform}>
          <p className={styles.label}>Email address or username</p>
          <input
            type="text"
            placeholder="Email address or username"
            className={styles.input}
            autoFocus
          />
          <p className={styles.label}>Password</p>
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <Link>Forgot your password?</Link>
        </div>

        <div className={styles.wrapper}>
          <label>
            <input type="checkbox" value="Remember me" />
            <span style={{ marginLeft: "5px" }}>Remember me</span>
          </label>
          <button className={[styles.button, styles.button_login].join(" ")}>
            LOG IN
          </button>
        </div>

        <h3>Don't have an account?</h3>
        <button className={styles.button}>SIGN UP FOR SPOTIFY</button>
      </div>
    </div>
  </div>
);

export default Login;
