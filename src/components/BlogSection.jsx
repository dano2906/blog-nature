import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section className="w-full h-auto mx-auto grid grid-cols-1 sm:grid-cols-3 bg-stone-100/100 p-4 sm:p-28 sm:gap-6 gap-3">
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
    </section>
  );
}
