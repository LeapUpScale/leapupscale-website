import Image from "next/image";
import localFont from "next/font/local";
import kaid from "../../public/Kaid.png";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <h1>Home - LeapUpScale</h1>
      <Image src={kaid} alt=""></Image>
    </div>
  );
}
