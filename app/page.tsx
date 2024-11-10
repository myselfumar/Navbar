import Link from "next/link";
export default function Home() {
  return ( <div>
  <ul className="flex gap-20 bg-blue-600">
   <li> <Link href="/" >Learn With Us</Link></li>
   <li> <Link href="/about">About</Link></li>
   <li><Link href="/Contact-us">Contact us</Link></li>
   </ul>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*3EivatZx8_5mx5J3zvqyhA.png" alt="" />
    </div>
  );
}
