'use client'

import MainContents from "@/components/main-contents/MainContents";
import Details from "@/components/sections/details/Details";
import { useMemo, useRef, useState } from "react";

export default function Home() {
  const [selectedNav, setSelectedNav] = useState('About')
  const scrollRef = useRef(null);

  // Function to scroll to the referenced element
  const scrollToTop = () => {
    if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useMemo(() => {
    scrollToTop()
  }, [selectedNav])

  return (
    <div ref={scrollRef} className="fixed w-full h-full bg-white dark:bg-black duration-300 overflow-auto">
      <main className="w-full p-5 sm:p-10 mx-auto max-w-[1250px] flex flex-col xl:flex-row gap-5 mb-16 lg:mb-0 relative">
        <Details />
        <MainContents selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </main>
    </div>
  );
}
