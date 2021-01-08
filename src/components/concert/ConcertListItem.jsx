import React from 'react';
import { Button, Container, ContainerInner, Image } from "../../style/components/concert/ConcertListItem.style";
import { Link, useHistory } from "react-router-dom";

const ConcertListItem = ({ item }) => {
    let date = item.date.split('/');
    const history = useHistory();
    const onClick = () => history.push('/programmation');

    return(
        <Container>
            <Button onClick={onClick}>
            <ContainerInner onClick={onClick}>
                <Image>img</Image>
                <span>
                    <p>{item.nom}</p>
                    <p>{date[0]}, {item.ville}, {date[1]}</p>
                    <p>{item.categorie}</p>
                    <Link to={'/programmation'}>Réserver</Link>
                </span>
            </ContainerInner>
            </Button>
        </Container>
    )
};

export default ConcertListItem;
