import { Component } from "react";
import LikeableImage from "./LikeableImages";
import "./main.css";

interface ImageData {
  id: string;
  alt_description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

interface Props {}
interface State {
  imagesData: ImageData[];
  likedImages: string[];
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { imagesData: [], likedImages: [] };
  }

  async componentDidMount() {
    const url = "https://api.unsplash.com/search/photos?page=1&query=landscape";
    const response = await fetch(url, {
      headers: {
        Authorization: "Client-ID 5ZkcjZyK-7yptGcXOlS91s1s2a31zPil8AsqlKe-Zms",
      },
    });
    const imagesData: ImageData[] = (await response.json()).results;

    const likedImages = JSON.parse(localStorage.likedImages || "[]");

    this.setState({ imagesData, likedImages });
  }

  toggleLikedImage(id: string) {
    const { likedImages } = this.state;

    const newList = likedImages.filter((imageId) => imageId !== id);

    if (newList.length === likedImages.length) {
      newList.push(id);
    }

    this.setState({ likedImages: newList });
  }

  componentDidUpdate() {
    localStorage.likedImages = JSON.stringify(this.state.likedImages);
  }

  render() {
    return (
      <main>
        {this.state.imagesData.map((imageData) => (
          <LikeableImage
            isLiked={this.state.likedImages.includes(imageData.id)}
            key={imageData.id}
            src={imageData.urls.regular}
            alt={imageData.alt_description}
            onToggleLiked={() => this.toggleLikedImage(imageData.id)}
          />
        ))}
      </main>
    );
  }
}
//MIN
export default Main;
