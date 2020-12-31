import React from 'react';

type SliderProps = {
  colorName: 'red' | 'green' | 'blue';
  min: number;
  max: number;
  step: number;
  colorValue: number;
  setColorValue(x: number): void;
};

function Slider({
  colorName,
  min,
  max,
  step,
  colorValue,
  setColorValue,
}: SliderProps) {
  return (
    <div className="columns is-centered">
      <label className="column is-1 has-text-link has-text-right">
        {colorName.toUpperCase()}
      </label>
      <label className="column is-1 has-text-right"> {min} </label>
      <input
        list="tick-marks"
        className="column is-9"
        value={colorValue}
        onChange={(event) => setColorValue(Number.parseInt(event.target.value))}
        type="range"
        name={`${colorName}`}
        min={`${min}`}
        max={`${max}`}
        step={`${step}`}
      />
      <label className="column is-1"> {max} </label>
    </div>
  );
}

export default Slider;
