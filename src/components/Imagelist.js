import Imageshow from "./Imageshow";
import "../App.css";
function Imagelist({ images }) {
  const render = images.map((images) => {
    // if you want to place this in a div you must move the key into the div component
    return <Imageshow key={images.id} images={images} />;
  });

  return <div className="list"> {render}</div>;
}

export default Imagelist;
