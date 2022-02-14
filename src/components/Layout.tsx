import Header from "./Header";
import Main from "./Main";
import "./layout.css";

function Layout() {
  return (
    <div>
      <Header showRightContent={true} />
      <Main />
    </div>
  );
}

export default Layout;
