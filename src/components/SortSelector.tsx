import { Menu, MenuItem, Button, MenuButton, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        OrderBy:
      </MenuButton>
      <MenuList>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
        <MenuItem>d</MenuItem>
        <MenuItem>e</MenuItem>
        <MenuItem>f</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
