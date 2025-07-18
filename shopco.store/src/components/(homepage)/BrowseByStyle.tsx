import Image from "next/image";
import model from "@/images/model.png";

const BrowseByStyle = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-100 rounded-3xl p-8 md:p-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Casual</h3>
              <Image
                src={model}
                alt="Casual style"
                width={300}
                height={200}
                className="absolute right-0 top-0 object-cover"
              />
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Formal</h3>
              <Image
                src={model}
                alt="Formal style"
                width={700}
                height={200}
                className="absolute right-0 top-0 "
              />
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Party</h3>
              <Image
                src={model}
                alt="Party style"
                width={600}
                height={200}
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Gym</h3>
              <Image
                src={model}
                alt="Gym style"
                width={300}
                height={200}
                className="absolute right-0 top-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByStyle;
