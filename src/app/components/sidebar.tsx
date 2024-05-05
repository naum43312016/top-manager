import Line from "./line";
import Menu from "./menu";
import Logo from "./logo";
import SocialLinks from "./socialLinks";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-[305px] h-screen bg-blue-1000">
      <Logo />
      <Line />
      <Menu />
      <Line />
      <SocialLinks />
    </div>
  );
}
