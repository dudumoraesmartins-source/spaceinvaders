import React from 'react';

export default function UseCallBackTestes() {

  const [contar, setContar] = React.useState(0);
  // useCallback -> 

  const handleClick = React.useCallback(
    () => {
      setContar((contar) => contar + 1);
    }, []);

  return (
    <div>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};