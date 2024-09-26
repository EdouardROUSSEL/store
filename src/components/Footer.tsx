import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-gray-200 rounded-3xl w-full mb-6 p-6 flex text-sm justify-between">
      <div className="flex w-1/2 space-x-8 justify-around tracking-widest">
        <div className="space-y-2">
          <p>SHOP</p>
          <div className="text-xs space-y-[1px]">
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
          </div>
        </div>
        <div className="space-y-2">
          <p>STORY</p>
          <div className="text-xs space-y-[1px]">
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
          </div>
        </div>
        <div className="space-y-2">
          <p>POLICY</p>
          <div className="text-xs space-y-[1px]">
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
          </div>
        </div>
        <div className="space-y-2">
          <p>CONTACT</p>
          <div className="text-xs space-y-[1px]">
            <p>text 1</p>
            <p>text 2</p>
            <p>text 3</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 justify-end flex">
        <form className="w-3/4 flex flex-col space-y-2">
          <label>
            JOIN OUR COMMUNITY—EMBRACE THE HARMONY OF NATURE & SCIENCE
          </label>
          <div className="w-full">
            <input
              placeholder="email"
              type="email"
              className="p-2 rounded-s-xl w-3/4 bg-gray-100"
            ></input>
            <button className="p-2 px-4 bg-gray-600 text-white rounded-e-xl">
              Valider
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
