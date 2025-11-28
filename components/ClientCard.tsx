"use client";

import Image from "next/image";
import React from "react";

export interface Client {
  name: string;
  image: string; // ✅ logo image path
}

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-4 h-20 min-w-[190px] flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors duration-200 border border-gray-200 mx-2">
      <Image
        src={client.image}
        alt={client.name}
        width={128}     // match max-h-16 = 64px
        height={64}
        className="h-full max-h-16 object-contain"
      />
    </div>
  );
};

export default ClientCard;
