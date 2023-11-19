import "./style.css";
import CardInput from "../../components/CardInput";

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>kreditní karta</h1>
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
