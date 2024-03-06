
import Link from "next/link";
import ImageCarousel from '../components/ImageCarousel.jsx'

export default function portfolio() {
  return (
    <div className="text-bold">
      <h1>Videos </h1>
      <ImageCarousel title='videos' link=''/>
      <Link href="/contact">Contact</Link>
      <Link href="/portfolio/audio">Audio</Link>
    </div>
  );
}

