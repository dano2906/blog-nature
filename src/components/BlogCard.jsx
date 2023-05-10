import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function BlogCard({ img, alt, title, paragraph }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <article
      ref={ref}
      className={`w-full sm:w-80 h-auto mx-auto rounded-lg shadow-lg shadow-black transition-all bg-stone-100 flex flex-col items-center justify-center ${
        inView
          ? `animate-in slide-in-from-bottom-full delay-100 duration-500`
          : "scale-0"
      }`}
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        className="w-full h-48 rounded-tr-md rounded-tl-md"
      />
      <div className="w-full h-1/2 p-3 rounded-bl-md rounded-br-md border border-stone-100 flex flex-col items-center justify-evenly gap-y-4">
        <strong className="text-center text-xl text-green-950">{title}</strong>
        <h4 className="text-center  line-clamp-3">{paragraph}</h4>
        <Link className="bg-green-950 hover:bg-green-100 text-green-100 hover:text-green-950 border border-green-950 px-7 py-3 rounded-md font-semibold">
          Leer mas
        </Link>
      </div>
    </article>
  );
}
