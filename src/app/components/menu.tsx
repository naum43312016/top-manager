import MenuLink from "./menuLink";

export default function Menu() {
  const menus = [
    {
      link: "/darhboard_alt.png",
      text: "Dashboard",
      isDropdown: false,
    },
    {
        link: "/team_mang.png",
        text: "Team management",
        isDropdown: true,
      },
      {
        link: "/comunication_sidebar.png",
        text: "Comunication",
        isDropdown: true,
      },
      {
        link: "/administration_sidebar.png",
        text: "Administration",
        isDropdown: true,
      },
      {
        link: "/scout_sidebar.png",
        text: "Scout",
        isDropdown: true,
      },
      {
        link: "/settings_sidebar.png",
        text: "Settings",
        isDropdown: true,
      }
  ];

  return (
    <div className="w-full flex flex-col mt-16 gap-4">
      {menus.map((m) => (
        <MenuLink
          key={m.text}
          text={m.text}
          link={m.link}
          isDropdown={m.isDropdown}
        />
      ))}
    </div>
  );
}
