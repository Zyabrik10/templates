import { Container } from "components";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <Container className={css["hero"]} type="section">
      <Container className={css["hero-container"]}>
        <h1 className={css["title"]}>Front-End React Template</h1>
        <p>Ready to use</p>
      </Container>
    </Container>
  );
}
