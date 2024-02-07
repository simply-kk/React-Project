import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* current color div */}
      <h1 className="flex flex-wrap justify-center text-white font-extrabold text-4xl">
        Current Background color : {color}
      </h1>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("Red")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("Blue")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Pink")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("Orange")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 y-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
