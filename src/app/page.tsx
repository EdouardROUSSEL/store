import Button from "@/components/Button";

export default function Page() {
  return (
    <div>
      <section className="w-full h-screen">
        <div className="rounded-[24px] bg-gray-300 h-[calc(100%-112px)] w-full flex p-16 items-end">
          <div className="space-y-4 w-1/2">
            <p className="text-white text-3xl">description du produit</p>
            <Button content={"Order"} />
          </div>
        </div>
      </section>
    </div>
  );
}
