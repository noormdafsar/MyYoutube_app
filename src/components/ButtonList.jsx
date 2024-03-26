import React from 'react';
import Button from './Button';

const ButtonList = ({ names }) => {
  if (!names || !names.length) {
    return <div>No names to display</div>;
  }

  return (
    <div className='flex mt-1'>
      {names.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

ButtonList.defaultProps = {
  names: ["All", "Live", "Music", "News", "Islam", "Streaming", "Trending", 
  "Dance", "Podcast", "Ghazal", "Watched", "Sheikh", "Pop", "Bollywood", "Hero"],
};

export default ButtonList;
