import React from 'react';
interface Props {
  name: string;
  alpha3Code: string;
  onClick: (code: string) => void;
}
const CountryItem:React.FC<Props> = React.memo(
  ({name, onClick, alpha3Code}) => {
    return (
      <li className="list-group-item" onClick={()=> onClick(alpha3Code)}>{name}</li>
    );
  }
);

export default CountryItem;