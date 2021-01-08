import logo from '../logo.svg';
import { Link } from "react-router-dom";
import ConcertList from "../components/concert/ConcertList";
import React from 'react';

function App() {
  return (
      <>
      <h2>Prochainement dans nos salles</h2>
    <ConcertList />
        <Link to={'/programmation'}>Voir toute la programmation</Link>
    </>
  );
}

export default App;
