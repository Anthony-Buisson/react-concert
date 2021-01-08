import React from 'react';
import { HeaderLi, HeaderLink, SubContainer } from "../../style/navigation/layout/HeaderItem.style";

const HeaderItem = ({ item }) => {
    const subItems = item.subLinks ? (
        <SubContainer role="menu">
            {item.subLinks.map(i=>(
                <HeaderLink role="presentation" to={i.route} isSmall>{i.title}</HeaderLink>
            ))}
        </SubContainer>
    ) : null;

    return (
        <HeaderLi>
            <HeaderLink data-toggle="dropdown" aria-expanded="false" to={item.route}>{item.title}</HeaderLink>
            {subItems}
        </HeaderLi>
    );
}

export default HeaderItem;
