import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const images = imageData();

  return (
    <div>
      <h1>Kalvium Gallary</h1>
      <div id='images'>
        {images.map((image) => (
          <img key={image.id} src={image.img} alt="" />
      ))}
      </div>
    </div>
  );
}

export default App;
