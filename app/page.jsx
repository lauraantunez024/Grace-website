import Link from "next/link";
import Image from "next/image";
import DirectoryButton from "./components/DirectoryButton";
import "./styles.css";
import paperSVG from '/public/paper.svg';
import portfolioSVG from '/public/portfolio.svg'
import contactSVG from '/public/contact.svg'


export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="column author-image">

        <Image
          width={350}
          height={300}
          src="/grace.png"
          alt="picture of the author"
        />
        </div>
        <div className="column column-right">
          <h1 className="right">
            {" "}
            Grace Rolfe is a visual story teller based in Georgia.
          </h1>
          <p className="right">
            {" "}
            As a social media coordinator and filmmaker, I thrive on weaving
            compelling narratives that catch audiences' attention while telling
            stories that matter. Through my diverse array of skills in
            screenwriting, directing, podcasting, photography, and audio editing
            skills, I can explore the limitless worlds of storytelling, each
            offering opportunities to create connections through content.{" "}
          </p>
        </div>
      </div>

      <div className="row items">
        <DirectoryButton title="Portfolio" description="View my work" imageSrc={portfolioSVG} link= "/portfolio" />
        <DirectoryButton title="Resume" description="Get to know me"  imageSrc={paperSVG} link='/grace-resume.pdf' target="_blank" />
        <DirectoryButton title="Contact" description="Get in touch"  imageSrc={contactSVG} link= "/contact" />{" "}
      </div>
    </div>
  );
}
