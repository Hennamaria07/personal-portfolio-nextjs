import Image from "next/image";
import bg from "../../public/images/home-background.png";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between relative">
      <Image 
      src={bg}
      alt="background image"
      className="object-conver object-center w-full h-full opacity-25"
      />
    </main>
  );
}
