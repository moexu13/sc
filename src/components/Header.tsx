import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-12 text-center p-8 rounded-lg bg-gradient-to-bottom from-[#8f87f1] to-[#c68efd]">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/logo-white.png"
          alt="Subordinate Clause Logo"
          width={500}
          height={500}
          className="h-16 w-auto"
        />
        <h1 className="text-6xl font-oooh-baby mb-2 text-white">
          Subordinate Clause
        </h1>
      </div>
      <p className="text-white/90 text-lg">
        Your reading journey, well-structured
      </p>
    </header>
  );
};

export default Header;
