import React from 'react';

type SliderProps = {
  colorName: 'red' | 'green' | 'blue';
  step: number;
  colorValue: number;
  onColorChange(x: number): void;
};

function Slider({ colorName, step, colorValue, onColorChange }: SliderProps) {
  return (
    <div className="columns is-centered">
      <label className="column is-1 has-text-link has-text-right">
        {colorName.toUpperCase()}
      </label>
      <label className="column is-1 has-text-right"> 0 </label>
      <input
        list="tick-marks"
        className="column is-9"
        value={colorValue}
        onChange={(event) => onColorChange(Number.parseInt(event.target.value))}
        type="range"
        name={`${colorName}`}
        min="0"
        max="255"
        step={`${step}`}
      />
      <label className="column is-1"> 255 </label>
    </div>
  );
}

export default Slider;
