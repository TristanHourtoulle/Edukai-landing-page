"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormInput = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès");
        setIsLoading(false);
        toast({
          title: "Email envoyé avec succès",
          description: "Nous vous répondrons dans les plus brefs délais.",
        });
        resetFormInput();
      } else {
        console.error("Erreur lors de l'envoi de l'email");
        setIsLoading(false);
        toast({
          title: "Erreur lors de l'envoi de l'email",
          description: "Veuillez réessayer plus tard.",
        });
        resetFormInput();
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
      setIsLoading(false);
      toast({
        title: "Erreur lors de l'envoi de l'email",
        description: "Veuillez réessayer plus tard.",
      });
      resetFormInput();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 outfit-regular">
      <h1 className="text-4xl text-white outfit-bold mb-2">Contacte nous</h1>

      <p className="text-md outfit-light text-white text-opacity-75 mb-4 text-center max-w-xl">
        Une question, une suggestion ou un projet ? N'hésite pas à nous
        contacter en remplissant le formulaire ci-dessous.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] bg-opacity-50 rounded-lg p-8 w-full max-w-lg shadow-lg"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-500 bg-opacity-50 text-white placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-500 bg-opacity-50 text-white placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-500 bg-opacity-50 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-500 bg-opacity-50 text-white placeholder-gray-400 h-32 resize-none"
            required
          ></textarea>
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          className="w-full bg-primary-500 text-white mt-6 py-3 rounded-full shadow-lg hover:bg-primary-600 transition-all"
        >
          {isLoading && <Loader2 className="animate-spin h-6 w-6" />}
          Envoyer le message
        </Button>
      </form>

      <div className="flex gap-6 mt-8 mb-8">
        <a
          href="https://www.linkedin.com/in/tristan-hourtoulle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/linkedin.png"
            width={32}
            height={32}
            alt="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
        <a
          href="https://github.com/TristanHourtoulle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/github.png"
            width={32}
            height={32}
            alt="GitHub"
            className="hover:opacity-80 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}
