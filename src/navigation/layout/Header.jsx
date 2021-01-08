import React from 'react';
import HeaderItem from "./HeaderItem";
import { Burger, Container } from '../../style/navigation/layout/Header.style';

const HEADER_DROPDOWNS = [
    { title: <img width={75} src={'https://e7.pngegg.com/pngimages/1013/770/png-clipart-eyedyllic-music-record-label-concert-logo-round-eyes-text-logo.png'} alt={'home'}/> , route: '/'},
    { title: 'Programmation', route: '/programmation', subLinks: [
        {title: 'Tous les évènements', route: '/programmation'},
        {title: 'Aix-en-Provence', route: '/programmation'},
        {title: 'Bourges', route: '/programmation'},
        {title: 'Cannes', route: '/programmation'},
        {title: 'Dunkerque', route: '/programmation'},
        {title: 'Echirolles', route: '/programmation'},
        {title: 'Comment réserver ?', route: '/programmation'},
    ] },
    { title: 'Restauration', route: '/restauration', subLinks: [
        {title: 'Présentation', route: '/restauration'},
        {title: 'Réserver', route: '/restauration'},
    ] },
    { title: 'Parking', route: '/parking', subLinks: [
            {title: 'Présentation', route: '/parking'},
            {title: 'Réserver', route: '/parking'},
    ] },
    { title: 'Privatisation', route: '/privatisation', subLinks: [
        {title: 'Présentation', route: '/privatisation'},
        {title: 'Réserver', route: '/privatisation'}
    ] },
    { title: 'Actualités', route: '/actualites'},
    { title: 'Infos pratiques', route: '/infos', subLinks: [
        {title: 'Comment venir ?', route: '/infos'},
        {title: 'FAQ', route: '/infos'}
    ] },
    { title: 'Contact', route: '/contact'},
    { title: 'Se connecter', route: '/compte'},,
    { title: <img src={'/assets/cart.svg'} alt={'panier'}/> , route: '/panier'}
]
const icon = '/assets/burger.svg';

const Header = () => (
    <div>
        <Burger>
            <img src={icon} alt={'menu'} />
            <Container>
                {HEADER_DROPDOWNS.map(headerItem=><HeaderItem item={headerItem} />)}
            </Container>
        </Burger>
    </div>
);

export default Header;
