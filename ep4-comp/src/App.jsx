import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  let user = "DS";
  return (
    <>
      <Header user={user} />
      <Content />
      <Footer user="Murugasen" />
    </>
  );
}

export default App;
