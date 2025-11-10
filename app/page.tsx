import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative 
      bg-[radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      
      {/* Vertical lines container - increased z-index */}
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full z-30 pointer-events-none">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b
          from-neutral-300/50 via-neutral-200 to-transparent">
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b
          from-neutral-300/50 via-neutral-200 to-transparent">
        </div>
      </div>

      <Container>
        <NavBar/>
        <Hero/>
      </Container>

      <div className="relative w-full">
        {/* Horizontal line */}
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r
          from-transparent via-neutral-200 to-transparent pointer-events-none z-10">
        </div>
        <div className="max-w-7xl mx-auto p-4 relative">
          <Image
            src="/banner.webp"
            alt="banner image"
            width={1000}
            height={1000}
            className="w-full object-cover rounded-xl object-top border border-neutral-200 shadow-md"/>
        </div>
      </div>
    </div>
  );
}
