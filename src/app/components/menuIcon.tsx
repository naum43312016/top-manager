import getSvg from "./getSvg";

export default function MenuIcon(props: { text: string; isHover: boolean }) {
  const { text, isHover } = props;
  const svg = getSvg({ text, isHover });
  return svg;
}
