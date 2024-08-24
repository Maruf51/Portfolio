'use client'

import MainContents from "@/components/main-contents/MainContents";
import Details from "@/components/sections/details/Details";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [selectedNav, setSelectedNav] = useState('About')
    const scrollRef = useRef(null);

    // Function to scroll to the referenced element
    const scrollToTop = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        scrollToTop()
    }, [selectedNav])
  return (
    <main className="w-full p-5 sm:p-10 mx-auto max-w-[1250px] flex flex-col xl:flex-row gap-5 mb-16 lg:mb-0">
      <div ref={scrollRef} className="absolute top-0"></div>
      <Details />
      <MainContents selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
    </main>
  );
}
