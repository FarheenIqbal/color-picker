import React, { useState } from 'react';
import Slider from './Slider';
import DataList from './DataList';

function App() {
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const str = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return (
    <div className="section">
      <div className="notification title has-text-danger has-text-centered">
        Color Picker
      </div>

      <div className="box">
        <Slider
          colorName="red"
          min={0}
          max={255}
          step={5}
          colorValue={red}
          setColorValue={setRed}
        />
        <Slider
          colorName="green"
          min={0}
          max={255}
          step={5}
          colorValue={green}
          setColorValue={setGreen}
        />
        <Slider
          colorName="blue"
          min={0}
          max={255}
          step={5}
          colorValue={blue}
          setColorValue={setBlue}
        />
      </div>
      <div
        style={{
          border: '2px solid black',
          margin: 'auto',
          width: '400px',
          height: '400px',
          position: 'relative',
          padding: '20px',
          backgroundColor: str,
        }}
      ></div>
      <p className="notification has-text-link has-text-centered">
        Red:{red} Blue:{blue} Green:{green}
      </p>
    </div>
  );
}

export default App;
