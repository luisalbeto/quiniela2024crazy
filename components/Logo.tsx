import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      className="cursor-pointer"
      src="/copalogo.svg"  // Ruta relativa a la carpeta 'public'
      alt="Logo"
      height={100}
      width={100}
    />
  );
};