import Image from "next/image";
import Link from "next/link";

// TODO: hero art for homepage?
// TODO: extract button to own component
// TODO: extract text to constants
// TODO: add hardcoded button color to global css
export default function Home() {
  return (
    <div className="w-full flex justify-between items-center flex-col py-8">
      <h1 className="py-4 font-bold">COME HERE</h1>
      <div className="w-full flex justify-center items-center gap-8">
        <Image
          className="rounded-2xl"
          width={200}
          height={300}
          src="/images/home/jason-face.png"
          alt="Jason's Face image"
          priority
        />
        <div>
          <p className="font-bold">subscribe for premium contents</p>
          <ul className="ml-4">
            <li>• video</li>
            <li>• music</li>
            <li>• podcast</li>
            <li>• posts</li>
            <li>• access</li>
          </ul>

          <Link href="/signup">
            <button className="mt-2 px-4 py-2 rounded-md bg-[#e047dd] text-white hover:bg-gray-800 transition cursor-pointer">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
