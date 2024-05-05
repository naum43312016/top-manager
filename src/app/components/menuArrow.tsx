import Image from "next/image";

export default function MenuArrow(props: { isDropdown?: boolean }) {
  if (!props.isDropdown) {
    return null;
  }

  return <Image src={"/arrow.png"} width={28} height={28} alt="icon" className="ml-2" />;
}
