import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar.jsx';
import Categories from '../components/Categories.jsx';


function Home() {
  console.log(import.meta.env.VITE_SOME_NAME)
  return (
    <>
      <Navbar />
      <Searchbar />
      <Categories />
    </>
  );
}

export default Home;
