import "./style.css";
import CardInput from "../../components/CardInput";

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Kreditní karta</h1>
      </header>
      <main>
        <CardInput />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
};
