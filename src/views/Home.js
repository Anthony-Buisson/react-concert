import React from 'react';
import ConcertList from "../components/concert/ConcertList";
import NewsList from "../components/news/NewsList";
import { ImagePrivatisation, PresentationContainer, Privatiser, Lien, Carousel } from "../style/views/Home.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CAROUSEL_ITEMS = [
    <img src="https://images.lanouvellerepublique.fr/image/upload/5b95be27be7744fb5c8b467b.jpg" className="carousel-item" />,
    <img src="https://www.voyage.fr/sites/default/files/styles/1170x530/public/2018-04/00-les-paysages-russes-a-voir-absolument.jpg?itok=V_lDD5Ip" className="carousel-item" />,
    <img src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/08/b5b50d60-4390-45d9-b7d0-d2f5c6588e50/1280x680_050_only_0389455.jpg" className="carousel-item" />,
]

function Home() {
  return (
      <>
          <Carousel arrows={true} dots={true} slideToshow={1}>
              {CAROUSEL_ITEMS}
          </Carousel>
          <ConcertList />
          <NewsList />
          <PresentationContainer>
              <span>
                  <ImagePrivatisation src="https://e7.pngegg.com/pngimages/1013/770/png-clipart-eyedyllic-music-record-label-concert-logo-round-eyes-text-logo.png" alt="Privatisation"/>
              </span>
              <span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, metus sit amet iaculis dapibus, dolor arcu facilisis mi, sed ornare a
                      rcu ante eu libero. Maecenas euismod urna at mi semper rutrum. Vivamus in auctor felis, vitae blandit eros. Proin viverra sed odio nec pretium. Nulla
                      auctor porta est, vitae interdum augue cursus in. Aliquam semper libero vel purus porta sollicitudin. Vestibulum ante ipsum primis in faucibus orci l
                      uctus et ultrices posuere cubilia curae; Quisque at leo ultrices, malesuada lacus vel, auctor dolor. Phasellus aliquet quam accumsan felis accumsan i
                      mperdiet. Phasellus auctor semper nulla, ac condimentum augue venenatis sed. In blandit commodo justo, lacinia porta ligula ullamcorper in. Ut rutrum
                      enim quis placerat tempus. Vestibulum ut dapibus neque, at faucibus orci. Morbi semper porttitor vulputate. Nam varius porta tincidunt. Pellentesque
                      nec pulvinar justo.</p>
                  <Privatiser><Lien to={'/privatisation'}>Privatiser</Lien></Privatiser>
              </span>
          </PresentationContainer>
      </>
  );
}

export default Home;
