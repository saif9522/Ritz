import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="logo-image"
        src="/logo.png"
        alt="Logo"
        width={140}
        height={45}
      />
    </div>
  );
}