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
    <div className="Searchbox h-96 w-[90%] my-0 mx-auto border rounded-lg border-pink-200">
      <div className="Searchbox-contents my-0 mx-auto w-[100%] h-[90%] pt-3 flex flex-col justify-center align-middle">
        <h1 className='text-[4.5em] text-center'>Search for events across the globe</h1>
        <input
           placeholder='Search' className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block my-0 mx-auto w-[90%] text-left p-2.5 h-14"
          onKeyDown={handleEnter}
          onChange={handletyping}
          type="text"
        />
      </div>
    </div>
  );
}


//className="Searchbar first_name"