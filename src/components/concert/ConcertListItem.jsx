import React from 'react';
import { Container, ContainerInner, Image } from "../../style/components/concert/ConcertListItem.style";

const ConcertListItem = ({ item }) => {
    let date = item.date.split('/');
    return(
        <Container>
            <ContainerInner>
            <Image>img</Image>
            <span>
                <p>{item.nom}</p>
                <p>{date[0]}, {item.ville}, {date[1]}</p>
                <p>{item.categorie}</p>
                <button>Réserver</button>
            </span>
            </ContainerInner>
        </Container>
    )
};

export default ConcertListItem;
