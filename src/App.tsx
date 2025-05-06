import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { SettingsBar } from './components/settingsbar/settingsbar';
import { FiSearch } from 'react-icons/fi';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    console.log('Pesquisando por:', event.target.value);
  }

  return (
    <>
      <div className='header'>
        <div className='hambuguer'>
          <SettingsBar />
        </div>
        <div className="logo-and-search">
          <h1 className='logo'>
            <img src="../public/image.png" className='image' alt="Logo Simple Food"></img> Simple Food
          </h1>
          <div className="search-bar">
            <input
              type="text"
              className='search-input'
              placeholder="Buscar pratos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FiSearch className="search-icon" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-grid">
          {data?.map(foodData => (
            <Card
              key={foodData.title}
              price={foodData.price}
              title={foodData.title}
              image={foodData.image}
            />
          ))}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>novo</button>
      </div>
    </>
  )
}

export default App
