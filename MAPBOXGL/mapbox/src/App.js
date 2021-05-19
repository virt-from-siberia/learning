import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./App.css";

import * as data from "./data/traffic/parking.json";

const token =
  "pk.eyJ1IjoidmlydHlvejc3NyIsImEiOiJja2Mza3Q3MnUyZW1rMndteG5ydjZzc2JxIn0.Ls5ngdxaI4Ag80Ji2acbpA";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyles="mapbox://styles/virtyoz777/cko7itm2x144k17qudnydupsu"
        mapboxApiAccessToken={token}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {data.features.map((park) => (
          <Marker
            key={park.properties.global_id}
            latitude={park.geometry.coordinates[0][0][1]}
            longitude={park.geometry.coordinates[0][0][0]}
          >
            <img
              style={{ width: "10px" }}
              alt="lol"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1024px-Check_green_icon.svg.png"
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
