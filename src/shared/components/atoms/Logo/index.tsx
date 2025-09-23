import Image from 'next/image';

type LogoProps = { className?: string };

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/assets/icons/logo.svg"
      alt="FDI Logo"
      width={180}
      height={180}
      className={className}
    />
  );
}
