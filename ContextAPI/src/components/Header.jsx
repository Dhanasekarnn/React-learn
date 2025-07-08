import { useContext } from "react";
import { UserContext } from "../App";

useContext;

function Header(props) {
  // console.log(props);
  let {
    user: { uName },
  } = useContext(UserContext);
  return (
    <header>
      <h1> Todo List - {uName.slice(0, 1)}</h1>
    </header>
  );
}

export default Header;
