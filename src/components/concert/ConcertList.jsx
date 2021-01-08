import React from 'react';
import { BASE_URL } from "../../env";
import axios from "axios";
import ConcertListItem from "./ConcertListItem";
import ItemList from "../shared/Itemlist";
import { Container } from "../../style/components/concert/ConcertList.style";

let url = BASE_URL+'/concerts';

const ConcertList = ( ) => {

    async function fetchData() {
        const { data } = await axios.get(url);
        return data;
    }

    return (
        <ItemList apiRequest={fetchData} renderItem={ConcertListItem} container={Container}/>
    )
};

export default ConcertList;
