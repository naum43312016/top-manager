import MenuLink from "./menuLink";
import { menuTitles } from "./menuTitles";

export default function Menu() {
  const menus = [
    {
      text: menuTitles.DASHBOARD,
      isDropdown: false
    },
    {
      text: menuTitles.TEAM_MANAGEMENT,
      isDropdown: true
    },
    {
      text: menuTitles.COMUNICATION,
      isDropdown: true
    },
    {
      text: menuTitles.ADMINISTRATION,
      isDropdown: true
    },
    {
      text: menuTitles.SCOUT,
      isDropdown: true
    },
    {
      text: menuTitles.SETTINGS,
      isDropdown: true
    },
  ];

  return (
    <div className="w-full flex flex-col mt-16 gap-4">
      {menus.map((m) => (
        <MenuLink
          key={m.text}
          text={m.text}
          isDropdown={m.isDropdown}
        />
      ))}
    </div>
  );
}
