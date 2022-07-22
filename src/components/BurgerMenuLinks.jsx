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
import { usePageTheme } from "../services/page-theme.hook";

const MenuItemIcon = (props) => {
  const { isSubMenuOpened, hasSubItems } = props;
  const { colors } = usePageTheme();

  if (!hasSubItems) {
    return (
      <ArrowRightAltIcon
        sx={{
          "&:hover": {
            color: colors.secondary,
          },
        }}
      />
    );
  }

  if (isSubMenuOpened) {
    return (
      <ExpandLess
        sx={{
          "&:hover": {
            color: colors.secondary,
          },
        }}
      />
    );
  }

  return (
    <ExpandMore
      sx={{
        "&:hover": {
          color: colors.secondary,
        },
      }}
    />
  );
};

export const BurgerMenuLinks = (props) => {
  const [isSubMenuOpened, setIsSubMenuOpened] = useState(false);
  const { colors } = usePageTheme();
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
            <ListItemText
              primary={item.name}
              sx={{
                "&:hover": {
                  color: colors.secondary,
                  textDecoration: "underline",
                },
              }}
            />
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
                    <ArrowRightAltIcon
                      sx={{
                        "&:hover": {
                          color: colors.secondary,
                        },
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={subItem.name}
                    sx={{
                      "&:hover": {
                        color: colors.secondary,
                        textDecoration: "underline",
                      },
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  );
};
