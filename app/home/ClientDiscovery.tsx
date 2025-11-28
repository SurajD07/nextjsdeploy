"use client";

import React from "react";
import styles from "./ClientDiscovery.module.css";
import ClientCard, { Client } from "@/components/ClientCard"; // also import type

const ClientDiscovery: React.FC = () => {
    const clients: Client[] = [
        { name: "SDAT", image: "/images/sdat.png" },
        { name: "Chennai Corporation", image: "/images/gcc.png" },
        { name: "ACA", image: "/images/t1.png" },
        { name: "The Hindu", image: "/images/t2.png" },
        { name: "Thanthi", image: "/images/t3.png" },
       
        { name: "Ramachandra2", image: "/images/t17.png" },
        { name: "Ramachandra3", image: "/images/t8.png" },
        { name: "Ramachandra4", image: "/images/t9.png" },
        { name: "Ramachandra5", image: "/images/t10.png" },
        { name: "Ramachandra6", image: "/images/t11.png" },
        { name: "Ramachandra7", image: "/images/t12.png" },
        { name: "Ramachandra8", image: "/images/t13.png" },
        { name: "Ramachandra9", image: "/images/t14.png" },
        { name: "Ramachandra10", image: "/images/t15.png" },
        { name: "Ramachandra", image: "/images/t16.png" },
        // ... add all your client logos here
    ];

    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <div className="max-w-full mx-auto p-6 bg-white overflow-hidden">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Clients</h1>

            {/* Row 1 - Left to Right */}
            <div className="relative mb-3 overflow-hidden">
                <div className={styles.marqueeContainer}>
                    <div className={`${styles.marqueeContent} ${styles.animateMarqueeLeft}`}>
                        {duplicatedClients.map((client, index) => (
                            <ClientCard key={`row1-${index}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Row 2 - Right to Left */}
            <div className="relative overflow-hidden">
                <div className={styles.marqueeContainer}>
                    <div className={`${styles.marqueeContent} ${styles.animateMarqueeRight}`}>
                        {duplicatedClients.map((client, index) => (
                            <ClientCard key={`row2-${index}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative mt-3 overflow-hidden">
                <div className={styles.marqueeContainer}>
                    <div className={`${styles.marqueeContent} ${styles.animateMarqueeLeft}`}>
                        {duplicatedClients.map((client, index) => (
                            <ClientCard key={`row1-${index}`} client={client} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDiscovery;
