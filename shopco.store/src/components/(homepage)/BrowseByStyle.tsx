import Image from "next/image";
import party from "@/assets/party1.png";
import formal from "@/assets/formal1.png";
import casual from "@/assets/casual1.png";
import gym from "@/assets/gym.png";
import { Card, CardContent } from "../ui/card";

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
              <div className="w-[500px] scale-150">
                <Image
                  src={casual}
                  alt="Casual style"
                  width={600}
                  height={400}
                  className="object-cover scale-x-[-1] absolute right-24 -top-24"
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-white w-full rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Formal</h3>
              <Image
                src={formal}
                alt="Formal style"
                width={800}
                height={200}
                className="absolute -right-64 -top-0 scale-150"
              />
            </div>
            <div className="md:col-span-2 bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Party</h3>
              <Image
                src={party}
                alt="Party style"
                width={700}
                height={200}
                className="absolute -right-5 -top-36 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 relative overflow-hidden h-60">
              <h3 className="text-2xl font-bold mb-4 z-50 absolute">Gym</h3>
              <Image
                src={gym}
                alt="Gym style"
                width={600}
                height={200}
                className="absolute -right-10 -bottom-44 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByStyle;
