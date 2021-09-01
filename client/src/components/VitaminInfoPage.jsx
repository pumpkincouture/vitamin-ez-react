import React from 'react';
import { useParams } from 'react-router';

import { VitaminInfoContainer } from './VitaminInfoContainer';

export function VitaminInfoPage(props) {
  const { id } = useParams();

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const renderContainer = () => {
    return data ? <VitaminInfoContainer data={data}/> : null;
  };

  return (
    <div>
      { renderContainer() }
    </div>
  )
}