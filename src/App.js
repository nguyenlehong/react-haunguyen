import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import pic from "./picture.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFeature />
        <AlbumFeature />
        <img src={pic} alt=""></img>
      </header>
    </div>
  );
}

export default App;
// {!inFemale && <p>sai</p>}

//         {inFemale && (
//           //<React.Fragment> </React.Fragment> = <> </>
//           <>
//             <p>dung</p>
//             <p>dung</p>
//           </>
//         )}

// {inFemale && <p>dung</p>}
{
  /* <p>
{" "}
Hi {name} - {age} {inFemale ? "true" : "no"} */
}
{
  /* </p>  
const name = "nguyen ";
  const age = 18;
  const inFemale = true;
  const student = {
    name: "nguyen le",
  };
  const colorList = ["red", "blue", "yellow", "green"];
          <ul>
          {colorList.map((color) => (
            <li style={{ color }}> {color}</li>
          ))}
        </ul> */
}
