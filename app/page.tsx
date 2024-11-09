import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="outfit-regular w-full h-full flex flex-col gap-6 items-center justify-center pb-[3%]">
      <div className="flex flex-col gap-3 items-center justify-center text-center outfit-regular">
        {/* <Badge className="flex items-center justify-center gap-4 outfit-regular text-xs text-primary-500 px-[3%] py-[0.5%] rounded-full border border-primary-500 bg-primary-500 bg-opacity-25 hover:bg-primary-500 hover:bg-opacity-25">
          <Image src={"/icons/stars.svg"} width={15} height={15} alt="Stars" />
          Dès Juillet 2025
        </Badge> */}
        <h1 className="outfit-semibold text-7xl text-white w-full">
          L'IA au service de vos révisions
        </h1>
        <p className="text-white text-opacity-75 text-lg text-center outfit-light w-full px-[10%]">
          Envoyez vos documents, notre outil les transforme en fiches et quiz
          sur-mesure.<br></br>
          <span className="text-primary-200">
            Révisez efficacement, sans effort.
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center gap-5 w-full outfit-regular mt-2">
        <Button className="text-white py-3 px-8 rounded-full shadow-xl transition-all transform hover:scale-105 relative">
          Rester informé
        </Button>

        <Button className="text-blue-500 py-3 px-8 rounded-full shadow-md transition-all bg-primary-500 bg-opacity-10 border-2 border-primary-500 hover:bg-primary-300 hover:bg-opacity-10">
          Nous contacter
        </Button>
      </div>

      <div className="flex items-center justify-center gap-5 mt-[2%]">
        <Image
          src={"/screens/LP - 2.svg"}
          width={200}
          height={200}
          alt="Illustration"
          className="shadow-lg transition-all transform hover:scale-105"
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
