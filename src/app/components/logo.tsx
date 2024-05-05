import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="mt-4"
      src="/logo_sidebar.png"
      alt="logo"
      width={152}
      height={152}
    />
  );
}
