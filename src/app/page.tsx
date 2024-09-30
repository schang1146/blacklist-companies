import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main>
        <h1>Blacklist</h1>
        <Input type="search" placeholder="Search..." />
      </main>
    </div>
  );
}
