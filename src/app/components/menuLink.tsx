import { useState } from "react";
import MenuArrow from "./menuArrow";
import MenuIcon from "./menuIcon";
import MenuTitle from "./menuTitle";

export default function MenuLink(props: {
  text: string;
  isDropdown?: boolean;
}) {
    const [isHover, setIsHover] = useState(false);

  const { text, isDropdown } = props;
  return (
    <div className="flex items-center flex-row pl-5 py-4 hover:bg-yellow-1000 text-white hover:text-black cursor-pointer"
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}>
      <MenuIcon text={text} isHover={isHover} />
      <MenuTitle text={text} />
      <MenuArrow isDropdown={isDropdown} />
    </div>
  );
}
