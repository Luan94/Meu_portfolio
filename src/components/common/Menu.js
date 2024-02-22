import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const MenuContainer = styled.div`
  ${tw`w-full bg-gray-900 text-white py-4`}
  position: sticky;
  top: ${({ isSticky }) => (isSticky ? '0' : '-100px')};
  transition: top 0.3s ease-in-out;
  z-index: 1000;
`;

const MenuWrapper = styled.div`
  ${tw`container flex justify-between items-center`}
`;

const Logo = styled.div`
  ${tw`text-xl font-bold`}
`;

const MenuList = styled.ul`
  ${tw`flex space-x-4`}
`;

const MenuItem = styled.li`
  ${tw`cursor-pointer`}
`;

const Menu = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <MenuContainer isSticky={isSticky}>
      <MenuWrapper>
        <Logo>Your Logo</Logo>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Menu;
