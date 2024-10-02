import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import FooterData from "../app/data/FooterData.json";
import { FooterSection, Subtitle } from "@/app/types";

export default function Footer() {
  const section1Data = FooterData.filter((data: FooterSection) =>
    ["histoire", "aide", "shop"].includes(data.title)
  );

  const section2Data = FooterData.filter((data: FooterSection) =>
    ["contact", "suivez-nous"].includes(data.title)
  );

  return (
    <footer className="bg-gray-200 rounded-3xl w-full mb-6 p-6 flex-col lg:flex-row flex text-sm justify-around">
      <Section sectionData={section1Data} />
      <div className="lg:w-1/4 w-full flex flex-col space-y-1 mb-6 lg:mb-0">
        <form className="flex flex-col space-y-2">
          <label className="tracking-widest px-3">
            SIGN UP AND GET UPDATE ON NEW PRODUCT
          </label>
          <div className="w-full h-10 xtext-xs border flex">
            <input
              placeholder="email"
              type="email"
              className="p-3 rounded-s-xl w-10/12 h-full outline-none"
            ></input>
            <button className=" px-4 text-white rounded-e-xl bg-white h-full w-2/12 items-center justify-end flex">
              <FaArrowRight className="fill-black" />
            </button>
          </div>
        </form>
        <p className="text-xs font-light px-3">
          En continuant, vous acceptez nos conditions générales et notre
          politique de confidentialité.
        </p>
      </div>
      <Section sectionData={section2Data} logo={true} />
      <div className="flex flex-col lg:hidden px-3 divide-y divide-black">
        <div className="w-full h-0 bg-black"></div>
        {FooterData.map((data, index) => (
          <MenuDrop question={data.title} reponse={data.subtitle} key={index} />
        ))}
        <div className="w-full h-0 bg-black"></div>
      </div>
    </footer>
  );
}

function MenuDrop({
  question,
  reponse,
}: {
  question: string;
  reponse: Subtitle[];
}) {
  return (
    <details className=" group/details [&_svg]:open:-rotate-180 py-2 flex space-y-2 text-xs">
      <summary className="flex cursor-pointer list-none justify-between items-center [&::-webkit-details-marker]:hidden ">
        <p className="uppercase ">{question}</p>
        <svg
          fill="#000000"
          height="10px"
          width="10px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>
          </g>
        </svg>
      </summary>
      <div className="">
        {reponse.map((data, index) => (
          <Link href={data.path} key={index}>
            <article className=" py-[2px]">{data.title}</article>
          </Link>
        ))}
      </div>
    </details>
  );
}

function Section({
  sectionData,
  logo = false,
}: {
  sectionData: FooterSection[];
  logo?: boolean;
}) {
  return (
    <div className="w-1/4 tracking-widest lg:flex hidden">
      {sectionData.map((data, index) => (
        <div className="space-y-2 w-1/3" key={index}>
          <p className="uppercase">{data.title}</p>
          <div className="text-xs space-y-1 flex flex-col">
            {data.subtitle.map((subtitleData, subIndex) => (
              <Link href={subtitleData.path} key={subIndex}>
                <p>{subtitleData.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
      {logo && <div>Logo</div>}
    </div>
  );
}
