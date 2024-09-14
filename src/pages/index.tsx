import Image from "next/image";
import kaid from "../../public/Kaid.png";

export default function Home() {
  return (
    <div>
      <h1>Home - LeapUpScale (development environment)</h1>
      <Image src={kaid} alt=""></Image>
    </div>
  );
}
