import "../App.css";

function Imageshow({ images }) {
  return (
    <div className="div">
      <img src={images.urls.small} alt={images.alt_description} />
    </div>
  );
}

export default Imageshow;
