import { useState } from 'react';



export default function Searchbar() {
  const [keyword, setKeyword] = useState('');

  const handletyping = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value)
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `/search/${keyword}`;
    }
  };

  return (
    <div className="Searchbox">
      <div className="Searchbox-contents">
        <h1>Search for events across the globe</h1>
        <input
          className="Searchbar"
          onKeyDown={handleEnter}
          onChange={handletyping}
          type="text"
        />
      </div>
    </div>
  );
}
