import "./LikeableImages.css";

interface Props {
  isLiked: boolean;
  src: string;
  alt: string;
  onToggleLiked: () => void;
}

function LikeableImage(props: Props) {
  return (
    <div className="root">
      <img className="image" src={props.src} alt={props.alt} />
      <i
        onClick={props.onToggleLiked}
        className={"icon " + (props.isLiked ? "liked" : "")}
      >
        ❤
      </i>
    </div>
  );
}

export default LikeableImage;
