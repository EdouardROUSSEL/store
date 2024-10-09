export default function FAQCard({
  question,
  reponse,
}: {
  question: string;
  reponse: string;
}) {
  return (
    <details className="border-gray-100 border hover:border-gray-200 bg-gray-200 space-y-4 group/details rounded-3xl p-6 [&_svg]:open:-rotate-180">
      <summary className="flex cursor-pointer list-none justify-between [&::-webkit-details-marker]:hidden ">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="px-4 py-1 bg-white w-fit rounded-full text-sm md:text-base">
              Question
            </div>
            <svg
              fill="#000000"
              height="15px"
              width="15px"
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
          </div>
          <h3 className="md:text-xl">{question}</h3>
        </div>
      </summary>
      <article className="p-4 bg-white rounded-xl">{reponse}</article>
    </details>
  );
}
