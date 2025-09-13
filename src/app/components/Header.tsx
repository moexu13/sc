import { Oooh_Baby } from "next/font/google";
import Image from "next/image";

const ooohBaby = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <header className="mb-12 text-center p-8 rounded-lg bg-[var(--color-primary)]">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/logo-white.png"
          alt="Subordinate Clause Logo"
          width={100}
          height={100}
          priority
          className="object-contain"
        />
        <h1 className={`text-6xl ${ooohBaby.className} mb-2 text-white`}>
          Subordinate Clause
        </h1>
      </div>
      <p className="text-white/90 text-lg">
        Your reading journey, well-structured
      </p>
    </header>
  );
}
