import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    Check Branches for the Code 
    <ModeToggle/>
    </div>
  );
}
