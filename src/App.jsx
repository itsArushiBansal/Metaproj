import Header from "./Components/Header.jsx";
import NavBar from "./Components/NavBar.jsx"
import Imagegrid from "./Components/Imagegrid.jsx";
function App() {
  const cards = [
    {
      src: '/Smiling Woman On Phone 1 (1).png',
      title: 'Guides and tutorials',
    },
    {
      src: '/Smiling Woman On Phone 1 (1).png',
      title: 'Frequently Asked Questions',
    },
    {
      src: '/Smiling Woman On Phone 1 (1).png',
      title: 'Privacy and security',
    },
    {
      src: '/Smiling Woman On Phone 1 (1).png',
      title: 'Contact us',
    },
  ];
  return (
    <>
      <NavBar />
      <Header />
      <Imagegrid cardd={cards}/>
    </>
  );
}

export default App;
