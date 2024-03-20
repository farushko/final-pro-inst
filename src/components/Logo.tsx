import Image from "next/image";

export default function Logo() {
  return (
    <div>
        <Image src="/logo-horizontal.png" width={300} height={88} alt="logo"/>
    </div>
  )
}