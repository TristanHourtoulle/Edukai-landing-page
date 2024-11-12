import Image from "next/image";

const teamMembers = [
  {
    name: "Tristan Hourtoulle",
    role: "Frontend & Communication",
    description:
      "Tristan s'occupe de créer les maquettes Figma et de développer tout le frontend de la solution. Il est également responsable de la communication sur les réseaux sociaux.",
    image: "/team/tristan.png",
    linkedin: "https://www.linkedin.com/in/tristan-hourtoulle/",
    github: "https://github.com/TristanHourtoulle",
  },
  {
    name: "Lucas Rossignon",
    role: "Automatisation des Tests & Mobile",
    description:
      "Lucas se charge d'automatiser les tests unitaires, de créer la documentation liée au projet, ainsi que du développement de la partie mobile.",
    image: "/team/lucas.png",
    linkedin: "https://www.linkedin.com/in/lucas-rossignon-43a559201/",
    github: "https://github.com/LucasRossignon",
  },
  {
    name: "Khalid Belkassmi",
    role: "Backend & Entraînement IA",
    description:
      "Khalid est responsable de l'aspect backend, de l'entraînement de l'IA LLM, et de la partie logicielle de notre solution.",
    image: "/team/khalid.png",
    linkedin: "",
    github: "https://github.com/khalidbelk",
  },
];

export default function Team() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <h1 className="outfit-bold text-2xl lg:text-4xl text-white font-bold mb-8">
        Notre Équipe
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="outfit-regular bg-[#1e293b] rounded-lg p-6 flex flex-col items-center shadow-lg hover:scale-105 transform transition-all"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-xl text-white font-semibold">{member.name}</h3>
            <p className="text-primary-500 font-medium">{member.role}</p>
            <p className="text-white text-opacity-75 mt-2 text-left">
              {member.description}
            </p>
            <div className="flex gap-4 mt-4 lg:mt-auto">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/logos/linkedin.png"}
                    width={24}
                    height={24}
                    alt="LinkedIn"
                    className="opacity-85 hover:opacity-100 transition-all"
                  />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/logos/github.png"}
                    width={24}
                    height={24}
                    alt="LinkedIn"
                    className="opacity-85 hover:opacity-100 transition-all"
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
