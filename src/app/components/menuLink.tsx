import MenuArrow from "./menuArrow";
import MenuIcon from "./menuIcon";
import MenuTitle from "./menuTitle";

export default function MenuLink(props: {
  text: string;
  link: string;
  isDropdown?: boolean;
}) {
  const { text, link, isDropdown } = props;
  return (
    <div className="flex flex-row pl-5 py-4 hover:bg-yellow-1000 text-white hover:text-black cursor-pointer">
      <MenuIcon link={link} />
      <MenuTitle text={text} />
      <MenuArrow isDropdown={isDropdown} />
    </div>
  );
}
