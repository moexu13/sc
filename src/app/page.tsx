import Link from "next/link";
import Header from "./components/Header";

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  progress: number;
}

// Temporary mock data - would typically come from an API/database
const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverUrl: "https://picsum.photos/200/300",
    progress: 65,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    coverUrl: "https://picsum.photos/200/300",
    progress: 30,
  },
  // Add more mock books as needed
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 font-instrument-sans bg-[#FAF9FF]">
      <div className="max-w-6xl mx-auto">
        <Header />
      </div>
    </main>
  );
}
