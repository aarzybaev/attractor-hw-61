import React from 'react';
interface Props {
  name: string;
  onClick: React.MouseEventHandler;
}
const CountryItem:React.FC<Props> = ({name, onClick}) => {
  return (
    <li key={Math.random()} className="list-group-item" onClick={onClick}>{name}</li>
  );
};

export default CountryItem;