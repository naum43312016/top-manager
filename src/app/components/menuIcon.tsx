import Image from "next/image";

export default function MenuIcon(props: { link: string }) {
  return (
    <Image
      src={props.link}
      width={24}
      height={24}
      alt="icon"
    />
  );
}
