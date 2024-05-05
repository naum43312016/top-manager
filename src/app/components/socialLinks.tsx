import Image from "next/image";
export default function SocialLinks() {
  return (
    <div className="flex flex-row mt-12 self-start bg-white p-2 rounded-br-2xl rounded-tr-2xl gap-2">
      <Image src={"/facebook.png"} width={40} height={40} alt="icon" className="cursor-pointer" />
      <Image src={"/twitter.png"} width={40} height={40} alt="icon" className="cursor-pointer" />
    </div>
  );
}
