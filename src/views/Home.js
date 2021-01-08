import React from 'react';
import ConcertList from "../components/concert/ConcertList";
import NewsList from "../components/news/NewsList";

function Home() {
  return (
      <>
          <ConcertList />
          <NewsList />
      </>
  );
}

export default Home;
