"use client";

import ContainerComponent from "@/components/container-component";
import SwiperGallery from "@/components/swiper-gallery";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WordsT, words } from "@/lib/words-utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
//swiper
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Home() {
  const [currentWord, setCurrentWord] = useState<WordsT>(words[0]);

  useEffect(() => {
    let currentIndex = 0;
    const rotateWords = () => {
      setCurrentWord(words[currentIndex]);
      currentIndex = (currentIndex + 1) % words.length;
    };

    const intervalId = setInterval(rotateWords, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ContainerComponent className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-indigo-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-indigo-300  hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">Resume builder</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Create your{" "}
          <span
            className={cn("transition-colors duration-200 ", {
              "text-indigo-500": currentWord === "own",
              "text-pink-500": currentWord === "custom",
              "text-orange-400": currentWord === "PRO",
            })}
          >
            {currentWord}
          </span>{" "}
          CV
          <span
            className={cn("transition-colors duration-200 ", {
              "text-indigo-500": currentWord === "own",
              "text-pink-500": currentWord === "custom",
              "text-orange-400": currentWord === "PRO",
            })}
          >
            .
          </span>
        </h1>
        <p className="mt-5 max-w-prose text-slate-700 sm:text-lg">
          Resume builder allows you to create Your own Resume. Try default theme
          for free or upgrade to premium for more options.
        </p>

        <Link href="/dashboard">
          <Button size="lg" variant="outline" className="mt-3">
            Get started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </ContainerComponent>

      {/* Displaying what this app doo */}
      <div className="mt-40">
        {/* preview */}
        <div>
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="-m-2 rounded-xl bg-indigo-900/5 p-2 ring-1 ring-inset ring-indigo-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <SwiperGallery />
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start building <span className="text-indigo-500">now</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Creating your own PDF file Resume has never been easier.
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-slate-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-slate-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-indigo-700 underline underline-offset-2"
                >
                  pro
                </Link>{" "}
                plan.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-slate-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 2
              </span>
              <span className="text-xl font-semibold">Start building</span>
              <span className="mt-2 text-slate-700">
                Either default template for free accounts or multiple templates
                for PRO accounts.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-slate-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-indigo-600">
                Step 3
              </span>
              <span className="text-xl font-semibold">
                Download your resume
              </span>
              <span className="mt-2 text-slate-700">
                It&apos;s that simple. Your resume will be in PDF file format.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
