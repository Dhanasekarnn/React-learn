import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { createContext, useState } from "react";

export let UserContext = createContext();

function App() {
  let [user, setUser] = useState({
    uName: "DS",
    age: 18,
    email: "ddd@fmailc.com",
  });

  // console.log(UserContent);

  return (
    <UserContext.Provider value={{ user }}>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
