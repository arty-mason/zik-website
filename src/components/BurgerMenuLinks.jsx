import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { menuConfig } from "../services/menu-config";

const MenuItemIcon = (props) => {
  const { isSubMenuOpened, hasSubItems } = props;

  if (!hasSubItems) {
    return <ArrowRightAltIcon />;
  }

  if (isSubMenuOpened) {
    return <ExpandLess />;
  }

  return <ExpandMore />;
};

export const BurgerMenuLinks = (props) => {
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);

  const handleMenuClicked = (config) => {
    if (!config.subItems) {
      props.onMenuItemClicked(); // new callback function. Usage: <BurgerMenuLinks onMenuItemClicked={() => setOpen(false)} />
      setTimeout(() => {
        setIsSubMenuOpened(false);
      }, 500);
    } else {
      setIsSubMenuOpened(!isSubMenuOpened);
    }
  };

  return (
    <List
    ///Importing List to give structure to the links
    >
      {menuConfig.map((item) => (
        <React.Fragment key={item.id}>
          <ListItemButton
            key={item.id}
            component={item.link ? Link : undefined}
            to={item.link || undefined}
            onClick={() => handleMenuClicked(item)}
          >
            <ListItemIcon>
              <MenuItemIcon
                hasSubItems={!!item.subItems}
                isSubMenuOpened={isSubMenuOpened}
              />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
          {item.subItems && isSubMenuOpened ? (
            <List component="div" disablePadding>
              {item.subItems.map((subItem) => (
                <ListItemButton
                  sx={{ pl: 4 }}
                  key={subItem.id}
                  component={subItem.link ? Link : undefined}
                  to={subItem.link || undefined}
                  onClick={() => handleMenuClicked(subItem)}
                >
                  <ListItemIcon>
                    <ArrowRightAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={subItem.name} />
                </ListItemButton>
              ))}
            </List>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  );
};
