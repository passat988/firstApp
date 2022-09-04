import axios from "axios";
import React, { useEffect, useState } from "react";
import PageCreate from "./components/page1"
import './styles/PageStyles.css'
import ButtonsCreate from "./components/buttons"
import CardsCreate from "./components/cards"
import CatalogCreate from "./components/catalog";
import PostService from "./components/cardsService";







function App() {
  const [cards, setCards] = useState([])
  const [value, setValue] = useState('1')
  useEffect(() => {
    fetchCards()
  }, [])
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState (20)
  const [page, setPage] = useState(1)
  let pagesArray =[]
  for (let i = 0; i<totalPages; i++){
    pagesArray.push(i+1)
  }

  
  // async function fetchCards(num=3) {
  //   let response = await cardsService.getAll()

  async function fetchCards() {
    let response = await PostService.getAll(value)
    
    setCards(response.data.results)
    setTotalPages(response.data.info.pages)
    
    // console.log(response.data.info.pages);
    
    
  }
  

  console.log(value);
  
  return (
    <div className="App">
      <PageCreate/>
      <ButtonsCreate value={value} setValue={setValue}/>
      <CatalogCreate cards={cards}/>
      {pagesArray.map(p => 
      <button
        onClick={() => setPage(p)}
        >
        {p}
        </button>
      )}
    </div>
  );
}

export default App;
