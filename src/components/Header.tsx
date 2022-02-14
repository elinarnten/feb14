import "./header.css";

interface Props {
  showRightContent: boolean;
}

function Header(props: Props) {
  return (
    <header>
      <h1>Browse images</h1>
      {props.showRightContent && <div>❤</div>}
    </header>
  );
}

export default Header;
