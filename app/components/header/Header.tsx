"use client";

import { Badge } from "@/components/ui/badge";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const allLinks = {
  Accueil: "/",
  Solution: "/solution",
  Equipe: "/team",
  Contact: "/contact",
};

export const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [linksToShow, setLinksToShow] =
    useState<Record<string, string>>(allLinks);
  const [selectedLink, setSelectedLink] = useState<string>("");
  const [underlinePosition, setUnderlinePosition] = useState<number>(0);
  const [underlineWidth, setUnderlineWidth] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const linksContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedLink(window.location.pathname);
    }
    updateLoginStatus();
  }, []);

  const updateUnderline = (url: string) => {
    const selectedRef = linkRefs.current[url];
    if (selectedRef && linksContainerRef.current) {
      const containerRect = linksContainerRef.current.getBoundingClientRect();
      const selectedRect = selectedRef.getBoundingClientRect();
      setUnderlinePosition(selectedRect.left - containerRect.left);
      setUnderlineWidth(selectedRect.width);
    }
  };

  const updateLoginStatus = () => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    const loginStatus = storedLoginStatus === "true";
    setIsLogin(loginStatus);
    setLinksToShow(allLinks);
    setSelectedLink(allLinks.Accueil);
    updateUnderline(selectedLink);
  };

  useEffect(() => {
    const handleLoginStatusChange = () => updateLoginStatus();
    window.addEventListener("loginStatusChanged", handleLoginStatusChange);
    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  const handleLoginToggle = () => {
    const newLoginStatus = !isLogin;
    setIsLogin(newLoginStatus);
    localStorage.setItem("isLogin", JSON.stringify(newLoginStatus));
    window.dispatchEvent(new CustomEvent("loginStatusChanged"));
    const newLink = allLinks.Accueil;
    setSelectedLink(newLink);
    updateUnderline(newLink);
    router.push(newLink);
  };

  const navigateToHome = () => {
    router.push(allLinks.Accueil);
    setSelectedLink(allLinks.Accueil);
    updateUnderline(allLinks.Accueil);
  };

  useEffect(() => {
    updateUnderline(selectedLink);
    const handleResize = () => updateUnderline(selectedLink);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedLink]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex items-center justify-between w-full py-[2%] px-4 mb-[0.5%] lg:mb-[3%]">
      <div className="flex items-center justify-start gap-3 z-50">
        <h2
          className="text-xl text-white outfit-regular cursor-pointer"
          onClick={navigateToHome}
        >
          Edukai
        </h2>
        <Badge className="hidden lg:flex items-center justify-center gap-2 outfit-regular text-xs text-primary-500 px-3 py-1 rounded-full border border-primary-500 bg-primary-500 bg-opacity-25 hover:bg-primary-500 hover:bg-opacity-25 whitespace-nowrap">
          <Image src={"/icons/stars.svg"} width={15} height={15} alt="Stars" />
          Dès Juillet 2025
        </Badge>
      </div>
      {/* Desktop Navigation */}
      <div
        ref={linksContainerRef}
        className="hidden lg:flex lg:absolute left-1/2 transform -translate-x-1/2"
      >
        <div className="relative flex items-center gap-5">
          {Object.entries(linksToShow).map(([name, url]) => (
            <a
              key={name}
              href={url}
              ref={(el) => {
                linkRefs.current[url] = el;
              }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedLink(url);
                updateUnderline(url);
                router.push(url);
              }}
              className={`transition-all relative text-md text-white hover:text-primary-500 outfit-regular ${
                selectedLink === url ? "text-primary-500" : ""
              }`}
            >
              {name.replace("_", " ")}
            </a>
          ))}
          <span
            className="absolute bottom-[-4px] h-[2.5px] bg-primary-500 rounded-full transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${underlinePosition}px)`,
              width: `${underlineWidth * 0.75}px`,
            }}
          ></span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-end gap-3">
        <a
          href="https://github.com/EdukaiFR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logos/github.png"}
            width={20}
            height={20}
            alt="GitHub"
            className="transition-all opacity-50 hover:opacity-100"
          />
        </a>
        <a
          href="https://www.instagram.com/edukaifr/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logos/instagram.png"}
            width={20}
            height={20}
            alt="Instagram"
            className="transition-all opacity-50 hover:opacity-100"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src={"/logos/linkedin.png"}
            width={20}
            height={20}
            alt="LinkedIn"
            className="transition-all opacity-50 hover:opacity-100"
          />
        </a>
      </div>

      {/* Mobile View */}
      <div className="flex grow items-center justify-end lg:hidden">
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white
            hover:text-primary-500 focus:outline-none focus:ring-inset focus:ring-indigo-500"
          onClick={toggleMenu}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transform transition-all lg:hidden ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <div className="px-[5%] w-full h-full py-[2%] bg-black bg-opacity-25 rounded-lg backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-[5%] pb-6 h-full">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-white outfit-bold">Edukai</h1>
                <div className="">
                  <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-white
            hover:text-primary-500 focus:outline-none focus:ring-inset focus:ring-indigo-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Fermer</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <hr className="mt-4 border border-gray-500 rounded-full border-opacity-50" />
              <div className="mt-6 h-full flex flex-col">
                <nav className="flex flex-col gap-y-6 items-center justify-center text-white outfit-regular text-md">
                  {Object.entries(linksToShow).map(([name, url]) => (
                    <a
                      key={name}
                      href={url}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedLink(url);
                        router.push(url);
                        toggleMenu();
                      }}
                      className={`transition-all relative hover:text-primary-500 ${
                        selectedLink === url ? "text-primary-500" : ""
                      }`}
                    >
                      {name.replace("_", " ")}
                    </a>
                  ))}
                </nav>

                {/* Display social links */}
                <div className="flex items-center justify-center mt-auto gap-3">
                  <a
                    href="https://github.com/EdukaiFR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/logos/github.png"}
                      width={20}
                      height={20}
                      alt="GitHub"
                      className="transition-all"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/edukaifr/?hl=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/logos/instagram.png"}
                      width={20}
                      height={20}
                      alt="Instagram"
                      className="transition-all"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/logos/linkedin.png"}
                      width={20}
                      height={20}
                      alt="LinkedIn"
                      className="transition-all"
                    />
                  </a>
                </div>

                <div className="flex items-end justify-center gap-3 mb-auto mt-5">
                  <Badge className="flex items-center justify-center gap-2 outfit-regular text-xs text-primary-500 px-3 py-1 rounded-full border border-primary-500 bg-primary-500 bg-opacity-25 hover:bg-primary-500 hover:bg-opacity-25 whitespace-nowrap">
                    <Image
                      src={"/icons/stars.svg"}
                      width={15}
                      height={15}
                      alt="Stars"
                    />
                    Dès Juillet 2025
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
