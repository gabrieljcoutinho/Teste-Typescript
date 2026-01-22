import React from 'react';
import "../index.css"

interface Props {}

const BtnHeader: React.FC<Props> = () => {
  return (
    <div>
      <button className='btnHeader'>Botao</button>
    </div>
  );
}

export default BtnHeader;