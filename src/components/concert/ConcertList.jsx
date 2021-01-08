import React, { useEffect, useState } from 'react';
import { BASE_URL } from "../../env";
import axios from "axios";
import ConcertListItem from "./ConcertListItem";
import { Container } from "../../style/components/concert/ConcertList.style";

let url = BASE_URL+'/concerts';

const ConcertList = ( ) => {
    const [concerts, setConcerts] = useState([]);

    useEffect(()=>{
        (async function fetchData() {
            const { data } = await axios.get(url)
            setConcerts(data)
        })()
    }, [])

    return (
        <Container>
            {concerts.map(c=><ConcertListItem item={c} />)}
        </Container>
    )
};

export default ConcertList;
