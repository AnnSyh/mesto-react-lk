import React from 'react';

function Button({ title, btnClass, handleClick}) {
  return (

    <Button className={btnClass} onClick={handleClick}>
      {title}
    </Button>
  );
}

export default Button;