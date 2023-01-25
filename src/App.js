import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Cardinfo from "../src/data";
function App() {
  const Carddata = Cardinfo.map((item) => {
    return (
      <Card
        key={item.id}
        item = {item}
      ></Card>
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Main></Main>
      <section className="card-list">{Carddata}</section>
    </div>
  );
}

export default App;
