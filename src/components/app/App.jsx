import Info from "../info/info.jsx";
import Compitenties from "../compitenties/compitenties.jsx";
import { imagesCompetenties, imagesTargetList } from "../../utils/data.js";
import { v4 as uuid } from "uuid";
import CardCompetention from "../card/card.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Info />
      <Compitenties title="Мои компетенции">
        <ul className={styles.listCompetentions}>
          {imagesCompetenties.map((el) => (
            <li key={uuid()}>
              <CardCompetention image={el.image} title={el.title} />
            </li>
          ))}
        </ul>
      </Compitenties>
      <Compitenties title="Технологии, которые хочу изучить">
      <ul className={styles.listCompetentions}>
          {imagesTargetList.map((el) => (
            <li key={uuid()}>
              <CardCompetention image={el.image} title={el.title} />
            </li>
          ))}
        </ul>
      </Compitenties>
    </>
  );
}

export default App;
