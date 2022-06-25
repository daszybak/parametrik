import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Parametrik Engineering"
      width={220}
      height={45}
      loading="lazy"
    />
  );
};

export default Logo;
