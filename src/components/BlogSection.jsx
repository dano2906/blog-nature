import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section className="w-full h-auto mx-auto relative bg-emerald-950 p-4 sm:p-28 sm:gap-6 gap-3">
      <h2 className="absolute text-5xl sm:text-7xl font-bold text-lime-200 sm:-top-12 -top-8 sm:left-[15%] left-[10%] drop-shadow-[0_0_6px_#011f07]">
        Blog
      </h2>
      <div className="w-full h-auto mx-auto my-8 sm:my-2 grid grid-cols-1 sm:grid-cols-3 sm:gap-6 gap-3">
        <BlogCard
          title="Las mariposas"
          paragraph={
            "Las mariposas son insectos lalalsmdaljsk aisjfajsfasj asdasd"
          }
          img={"/gq4.webp"}
          alt={"mariposas"}
        />
        <BlogCard
          title="Las arañas"
          paragraph={
            "Las mariposas son insectos lalalsmdaljsk aisjfajsfasj asdasd"
          }
          img={"/gq5.webp"}
          alt={"mariposas"}
        />
        <BlogCard
          title="Capullos"
          paragraph={
            "Las mariposas son insectos lalalsmdaljsk aisjfajsfasj asdasd"
          }
          img={"/gq6.webp"}
          alt={"mariposas"}
        />
        <BlogCard
          title="Las mariposas 2"
          paragraph={
            "Las mariposas son insectos lalalsmdaljsk aisjfajsfasj asdasd"
          }
          img={"/gq2.webp"}
          alt={"mariposas"}
        />
        <BlogCard
          title="Las mariposas 3"
          paragraph={
            "Las mariposas son insectos lalalsmdaljsk aisjfajsfasj asdasd"
          }
          img={"/gq7.webp"}
          alt={"mariposas"}
        />
      </div>
    </section>
  );
}
