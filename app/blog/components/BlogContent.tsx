"use client";

import Image from "next/image";

export default function BlogContent() {
    return (
        <div className="space-y-6">
            {/* Blog Title */}
            <h1 className="text-3xl font-bold">How to choose the right Cricket Bat</h1>

            {/* Author Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <Image
                    src="/images/about/bb2.png"
                    alt="Author"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <p className="font-medium">Sasi Kumar</p>
                    <p>June 13, 2024 • 15-20 mins read</p>
                </div>
            </div>

            <Image
                src="/images/about/bb5.png"
                alt="Cricket Bat"
                width={400}
                height={150}
                className="rounded-lg w-200 h-68"   // force width = 256px, height = 128px
            />




            {/* Blog Content */}
            <div className="space-y-6">
                <section>
                    <div className="mb-5">
                        <p>A cricket bat isnt just a piece of wood — its a players best partner on the
                            pitch. The right bat can improve your performance, boost your confidence,
                            and make every shot more powerful. But with so many options out there,
                            how do you know which one is right for you? Dont worry — heres a simple
                            guide to help you pick the perfect bat.</p>

                    </div>


                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">1</span>
                        Know Your Playing Style
                    </h2>
                    <p className="mt-2 text-gray-700">
                        <strong>Power Hitters:</strong> Go for a heavier bat with a thicker profile for stronger shots. <br />
                        <strong>Stroke Players:</strong> A lighter bat helps with quick hand movements and timing. <br />
                        <strong>All-Rounders:</strong> Choose a balanced bat that offers both power and control.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">2</span>
                        Weight Matters
                    </h2>
                    <p className="mt-2 text-gray-700">
                        <strong>Light bats (2lb 7oz – 2lb 9oz):</strong> Easier to swing, great for quick shots. <br />
                        <strong>Heavy bats (2lb 10oz – 3lb):</strong> Offer more power but require good wrist strength.
                    </p>
                </section>



                <section>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">3</span>
                        Handle and Grip
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Choose a grip that feels comfortable in your hands and offers good control during shots.
                    </p>
                </section>
                <section>
                    <div className="mb-5">
                        <p>A cricket bat isnt just a piece of wood — its a players best partner on the
                            pitch. The right bat can improve your performance, boost your confidence,
                            and make every shot more powerful. But with so many options out there,
                            how do you know which one is right for you? Dont worry — heres a simple
                            guide to help you pick the perfect bat.</p>

                    </div>


                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">4</span>
                        Know Your Playing Style
                    </h2>
                    <p className="mt-2 text-gray-700">
                        <strong>Power Hitters:</strong> Go for a heavier bat with a thicker profile for stronger shots. <br />
                        <strong>Stroke Players:</strong> A lighter bat helps with quick hand movements and timing. <br />
                        <strong>All-Rounders:</strong> Choose a balanced bat that offers both power and control.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">5</span>
                        Weight Matters
                    </h2>
                    <p className="mt-2 text-gray-700">
                        <strong>Light bats (2lb 7oz – 2lb 9oz):</strong> Easier to swing, great for quick shots. <br />
                        <strong>Heavy bats (2lb 10oz – 3lb):</strong> Offer more power but require good wrist strength.
                    </p>
                </section>



                <section>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">6</span>
                        Handle and Grip
                    </h2>
                    <p className="mt-2 text-gray-700">
                        Choose a grip that feels comfortable in your hands and offers good control during shots.
                    </p>
                </section>
            </div>
        </div>
    );
}
