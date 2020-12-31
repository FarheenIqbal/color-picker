import React from 'react';

type DataListProps = {
  min: number;
  max: number;
  step: number;
  name: string;
};

function DataList({ min, max, step, name }: DataListProps) {
  function getArray(min: number, max: number): number[] {
    const arr = [];
    for (let i = min; i <= max; i += step) {
      arr.push(i);
    }
    return arr;
  }

  return (
    <datalist id={name} style={{ display: 'inline' }}>
      {getArray(min, max).map((element) => (
        <option value={element}></option>
      ))}
    </datalist>
  );
}

export default DataList;
