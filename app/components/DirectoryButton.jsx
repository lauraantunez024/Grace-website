import Link from "next/link";
import Image from "next/image";
import "./styles.module.css";

export default function DirectoryButton({ title, description, imageSrc, link, target="" }) {
  return (
    <a className="container" href={link} target={target}>
      {" "}
      <div className="">
        {/* add props for title below */}
        <h2 className="">{title}</h2>

        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={imageSrc}
          alt="icons"
          width={50}
          height={37}
          priority
        />
        <p className="">{description}</p>
      </div>
    </a>
  );
}
