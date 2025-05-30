import Image from "next/image";
import Link from "next/link";

// TODO: hero art for homepage?
// TODO: extract button to own component
// TODO: styles, add hardcoded button color to global css, check color a11y

const HOME_TITLE = "COME HERE";
const HOME_SUBTITLE = "subscribe for premium content";
const LIST_ITEM_TEXT_1 = "• video";
const LIST_ITEM_TEXT_2 = "• music";
const LIST_ITEM_TEXT_3 = "• podcast";
const LIST_ITEM_TEXT_4 = "• posts";
const LIST_ITEM_TEXT_5 = "• access";
const SIGNUP_BTN_CTA = "SIGN UP";

const HomePage = () => {
  return (
    <div className="w-full flex justify-between items-center flex-col py-8">
      <h1 className="py-4 font-bold">{HOME_TITLE}</h1>
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
          <p className="font-bold">{HOME_SUBTITLE}</p>
          <ul className="ml-4">
            <li>{LIST_ITEM_TEXT_1}</li>
            <li>{LIST_ITEM_TEXT_2}</li>
            <li>{LIST_ITEM_TEXT_3}</li>
            <li>{LIST_ITEM_TEXT_4}</li>
            <li>{LIST_ITEM_TEXT_5}</li>
          </ul>

          <Link href="/signup">
            <button className="mt-2 px-4 py-2 rounded-md bg-[#e047dd] text-white hover:bg-gray-800 transition cursor-pointer">
              {SIGNUP_BTN_CTA}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
