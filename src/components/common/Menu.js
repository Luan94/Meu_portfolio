import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: top 0.3s;
  background-color: white;
  z-index: 999;

  &.hidden {
    top: -100%;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.a`
  color: #333;
  font-weight: 600;
  text-decoration: none;
  margin-right: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;

const Logo = styled.img`
  max-width: 150px;
`;

const Menu = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVisible]);

  return (
    <MenuWrapper className={!isVisible ? "hidden" : ""}>
      <MenuContainer>
        <Logo src="/logo.png" alt="Logo" />
        <div>
          <MenuItem href="#">Home</MenuItem>
          <MenuItem href="#">About</MenuItem>
          <MenuItem href="#">Services</MenuItem>
          <MenuItem href="#">Contact</MenuItem>
        </div>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default Menu;
