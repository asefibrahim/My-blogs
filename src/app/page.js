"use client";
import { useEffect, useState } from "react";
import HomeSingleBlog from "./ReuseableComponents/HomeSingleBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const [Blog, setBlog] = useState(null);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlog(data.articles));
  }, []);

  return (
    <div>


      <section
        class="relative bg-[url(https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          class="absolute inset-0 bg-white/75 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="mx-auto max-w-3xl text-center">
            <h1
              class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.

              <span class="sm:block"> Increase Conversion. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <h1 className="font-bold text-2xl border-b py-2">Popular Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Blog &&
            Blog.slice(0, 4).map((singleBlog, index) => (
              <HomeSingleBlog key={index} Blog={singleBlog} />
            ))}
        </div>
      </div>
    </div>
  );
}
