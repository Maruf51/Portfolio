'use client'

import MainContents from "@/components/main-contents/MainContents";
import Details from "@/components/sections/details/Details";
import { useMemo, useRef, useState } from "react";

export default function Home() {
  const [selectedNav, setSelectedNav] = useState('About')
  const scrollRef = useRef(null);

  // Function to scroll to the referenced element
  const scrollToTop = () => {
    if (scrollRef.current) scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useMemo(() => {
    scrollToTop()
  }, [selectedNav])

  return (
    <main className="w-full p-5 sm:p-10 mx-auto max-w-[1250px] flex flex-col xl:flex-row gap-5 mb-16 lg:mb-0 relative">
      <div ref={scrollRef} className="absolute top-0"></div>
      <Details />
      <MainContents selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
    </main>
  );
}
