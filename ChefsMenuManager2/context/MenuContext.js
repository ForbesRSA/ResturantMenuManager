import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    const newItem = {
      id: Date.now().toString(),
      ...item,
    };
    setMenuItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
}
