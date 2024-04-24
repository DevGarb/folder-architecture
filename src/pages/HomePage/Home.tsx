import { Button } from "../../components/Button/Button";
import styles from "./Home.module.css";

// import {
//   Banner,
//   FeaturesCollections,
//   Hero,
//   ProductsList,
// } from '../../components' 

// => Exemplo de como deve chamar os componentes para a página.

export const Home = () => {
  return (
<div className={styles.container}>
    <Button text="BOTÃO" />
    </div>
  );
};
