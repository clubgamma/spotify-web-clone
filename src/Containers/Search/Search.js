import styles from "./Search.module.css";
import Card from "../Card/Card";

const Search = () => (
  <div className={styles.temp}>
    <div className={styles.container}>
      <h1>Browse all</h1>

      <div className={styles.wrapper}>
        <Card title="podcast" bgColor="#27856a" />
        <Card title="made for you" bgColor="#1e3264" />
        <Card title="charts" bgColor="#8d67ab" />
        <Card title="new releases" bgColor="#e8115b" />
        <Card title="discover" bgColor="#8d67ab" />
        <Card title="concerts" bgColor="#1e3264" />

        <Card title="covid-19" bgColor="#509bf5">
          guide
        </Card>
        <Card title="bollywood" bgColor="#ff4632" />
        <Card title="EQUAL" bgColor="#148a08" />
        <Card title="punjabi" bgColor="#af2896" />
        <Card title="tamil" bgColor="#ffc864" />
        <Card title="telugu" bgColor="#19e68c" />

        <Card title="indie" bgColor="#608108" />
        <Card title="pop" bgColor="#8d67ab" />
        <Card title="RADAR" bgColor="#b49bc8" />
        <Card title="marathi" bgColor="#f037a5" />
        <Card title="diwali" bgColor="#9cf0e1" />
        <Card title="devotional" bgColor="#8d67ab" />

        <Card title="indian" bgColor="#1e3264">
          classical
        </Card>
        <Card title="romance" bgColor="#8c1932" />
        <Card title="decades" bgColor="#ba5d07" />
        <Card title="k-pop" bgColor="#148a08" />
        <Card title="hip hop" bgColor="#ba5d07" />
        <Card title="party" bgColor="#af2896" />

        <Card title="instrumental" bgColor="#477d95" />
        <Card title="dance /" bgColor="#dc148c">
          electronic
        </Card>
        <Card title="student" bgColor="#af2896" />
        <Card title="chill" bgColor="#477d95" />
        <Card title="mood" bgColor="#8d67ab" />
        <Card title="wellness" bgColor="#477d95" />

        <Card title="higher ground" bgColor="#a0c3d2" />
        <Card title="workout" bgColor="#777777" />
        <Card title="folk &" bgColor="#1e3264">
          acoustic
        </Card>
        <Card title="sleep" bgColor="#1e3264" />
        <Card title="kids & family" bgColor="#8d67ab" />
        <Card title="at home" bgColor="#477d95" />

        <Card title="r&b" bgColor="#dc148c" />
        <Card title="tastemakers" bgColor="#eb1e32" />
        <Card title="rock" bgColor="#e61e32" />
        <Card title="focus" bgColor="#503750" />
        <Card title="summer" bgColor="#ffc864" />
        <Card title="cooking &" bgColor="#ba5d07">
          dining
        </Card>

        <Card title="jazz" bgColor="#1e3264" />
        <Card title="stop asian" bgColor="#eb1e32">
          hate
        </Card>
        <Card title="gaming" bgColor="#e8115b" />
        <Card title="caribbean" bgColor="#0d73ec" />
        <Card title="soul" bgColor="#dc148c" />
        <Card title="classical" bgColor="#8d67ab" />

        <Card title="latin" bgColor="#e13300" />
        <Card title="metal" bgColor="#777777" />
        <Card title="blues" bgColor="#1e3264" />
        <Card title="funk" bgColor="#e61e32" />
        <Card title="punk" bgColor="#1e3264" />
        <Card title="travel" bgColor="#2d46b9" />

        <Card title="country" bgColor="#e13300" />
        <Card title="anime" bgColor="#0d73ec" />
        <Card title="songwriters" bgColor="#8c1932" />
        <Card title="tv & movies" bgColor="#af2896" />
        <Card title="ambient" bgColor="#477d95" />
        <Card title="fresh finds" bgColor="#509bf5" />

        <Card title="happier than" bgColor="#907255">
          ever
        </Card>
        <Card title="music + talk" bgColor="#1e3264" />
        <Card title="happy" bgColor="#8c1932">
          holidays
        </Card>
      </div>
    </div>
  </div>
);

export default Search;
