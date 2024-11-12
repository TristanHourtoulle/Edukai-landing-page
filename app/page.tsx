import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="outfit-regular w-full min-h-screen flex flex-col gap-6 items-center justify-center pb-[1.5%] lg:pb-[3%] pt-[10%] lg:pt-0">
      <div className="flex flex-col gap-2 lg:gap-3 items-center justify-center text-center outfit-regular">
        <h1 className="outfit-semibold text-3xl lg:text-7xl text-white w-full">
          L'IA au service de tes révisions
        </h1>
        <p className="text-white text-opacity-75 text-sm lg:text-lg text-center outfit-light w-full px-[5%] lg:px-[10%]">
          Envoye tes documents, notre outil les transforme en fiches et quiz
          sur-mesure.<br></br>
          <span className="text-primary-200">
            Révise efficacement, sans effort.
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2 lg:gap-5 w-full outfit-regular mt-2">
        <Button className="text-sm text-white py-3 px-8 rounded-full shadow-xl transition-all transform hover:scale-105 relative">
          Reste informé
        </Button>

        <a href="/contact">
          <Button className="w-full text-blue-500 py-3 px-8 rounded-full shadow-md transition-all bg-primary-500 bg-opacity-10 border-2 border-primary-500 hover:bg-primary-300 hover:bg-opacity-10 relative">
            Nous contacter
          </Button>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center gap-5 mt-[2%]">
        <Image
          src={"/screens/LP - 2.svg"}
          width={200}
          height={200}
          alt="Illustration"
          className="shadow-lg transition-all transform hover:scale-105 order-2 lg:order-1"
        />
        <Image
          src={"/screens/LP - 4.svg"}
          width={400}
          height={400}
          alt="Illustration"
          className="shadow-lg transition-all transform hover:scale-105 rounded-lg"
          style={{
            boxShadow: "0 4px 20px rgba(54, 120, 255, 0.5)", // Ombre colorée
          }}
        />
        <Image
          src={"/screens/LP - 3.svg"}
          width={200}
          height={200}
          alt="Illustration"
          className="shadow-lg transition-all transform hover:scale-105"
        />
      </div>
    </div>
  );
}
