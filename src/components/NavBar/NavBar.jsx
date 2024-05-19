import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button
  } from '@chakra-ui/react'
  import { FaArrowDown } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<FaArrowDown />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
      <CartWidget/>
    </Box>
  )
}

export default NavBar
