import React from 'react';
import { Button, Container, ContainerInner, Image } from "../../style/components/news/NewsListItem.style";
import { Link, useHistory } from "react-router-dom";

const NewsListItem = ({ item }) => {
    const history = useHistory();
    const onClick = () => history.push('/programmation');

    return(
        <Container>
            <Button onClick={onClick}>
            <ContainerInner onClick={onClick}>
                <Image>img</Image>
                <span>
                    <p>{item.titre}</p>
                    <p>{item.description}</p>
                    <Link to={'/programmation'}>En savoir plus</Link>
                </span>
            </ContainerInner>
            </Button>
        </Container>
    )
};

export default NewsListItem;
