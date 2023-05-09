import { Link } from "react-router-dom";

export default function BlogCard({ img, alt, title, paragraph }) {
  return (
    <article className="w-full sm:w-80 h-auto rounded-lg bg-lime-200/100 border border-green-950 flex flex-col items-center justify-center">
      <img
        src={img}
        alt={alt}
        className="w-full h-48 rounded-tr-md rounded-tl-md"
      />
      <div className="w-full h-1/2 p-3 flex flex-col items-center justify-evenly gap-y-4">
        <strong className="text-center text-lg text-green-950">{title}</strong>
        <h4 className="text-center  line-clamp-3">{paragraph}</h4>
        <Link className="bg-green-950 text-green-100 px-7 py-3 rounded-md">
          Leer mas
        </Link>
      </div>
    </article>
  );
}
