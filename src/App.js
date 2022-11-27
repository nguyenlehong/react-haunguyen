import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import Loadchu from "./test";
import ColorBox from "./components/ColorBox";
import Count from "./components/Count";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFeature />
        {/* <AlbumFeature /> */}
        <Loadchu />
        {/* <ColorBox></ColorBox> */}
        {/* <Count></Count> */}
      </header>
    </div>
  );
}

export default App;
