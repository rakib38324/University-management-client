import { NavLink } from "react-router-dom";
import { TSildebarItem, TUserPath } from "../types";


export const sidebarItemGenerator = (items: TUserPath[], role:string) => {
  const sidebarItems = items.reduce(
    (acc: TSildebarItem[], item) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
        });
      }
  
      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }
  
      return acc;
    },
    []
  );
  

  return sidebarItems;
}
    