import Image from "next/image";
import party from "@/assets/party.png";
import formal from "@/assets/formal.png";
import casual from "@/assets/casual.png";
import gym from "@/assets/gym.png";

const BrowseByStyle = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-gray-100 rounded-3xl p-6 md:p-12 lg:p-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Casual */}
          <div className="bg-gray-300/50 rounded-2xl p-6 relative overflow-hidden h-60 hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold z-20 absolute top-4 left-4 text-white bg-zinc-400/70 px-3 py-1 rounded-2xl">
              Casual
            </h3>
            <div className="absolute right-10 -top-12 w-[450px]  md:w-[350px] lg:w-[450px] scale-150">
              <Image
                src={casual}
                alt="Casual style"
                width={600}
                height={400}
                className="object-cover scale-x-[-1]"
              />
            </div>
          </div>

          {/* Formal */}
          <div className="md:col-span-2 bg-gray-300/50 rounded-2xl p-6 relative overflow-hidden h-60 hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold z-20 absolute top-4 left-4 text-white bg-zinc-400/70 px-3 py-1 rounded-2xl">
              Formal
            </h3>
            <div className="absolute -right-80 -top-6 w-[500px] md:w-[700px] lg:w-[800px] scale-150">
              <Image
                src={formal}
                alt="Formal style"
                width={800}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Party */}
          <div className="md:col-span-2 bg-gray-300/50 rounded-2xl p-6 relative overflow-hidden h-60 hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold z-20 absolute top-4 left-4 text-white bg-zinc-400/70 px-3 py-1 rounded-2xl">
              Party
            </h3>
            <div className="absolute -right-6 -top-40 w-[500px] md:w-[700px] lg:w-[800px]">
              <Image
                src={party}
                alt="Party style"
                width={700}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Gym */}
          <div className="bg-gray-300/50 rounded-2xl p-6 relative overflow-hidden h-60 hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold z-20 absolute top-4 left-4 text-white bg-zinc-400/70 px-3 py-1 rounded-2xl">
              Gym
            </h3>
            <div className="absolute -right-28 -bottom-52  w-[400px]">
              <Image
                src={gym}
                alt="Gym style"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
