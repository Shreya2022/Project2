import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

//We want a unique category
//new Set gives us the unique values after getting parenthesis
//new data is object so we convert it into array
//... = Spread Operator is used make pure array
const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})
),'All']
console.log(uniqueList);

const Resturant = () => {
    // useState ka kam h data ko hold krk rakhna

    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, setMenuList] = React.useState(uniqueList);

    const filterItem = (category) => {

        if (category == 'All') {
            setMenuData(Menu);
            return;
        }

        //filter krdega jo category di hogi or updatedList me add kr dega. 
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant;
