import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";



export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Information We Collect",
            items: [
                "Personal details: name, email, phone, shipping/billing address.",
                "Payment details (securely processed via trusted gateways)",
                "Browsing data like cookies, device info, and preferences.",
            ],
        },
        {
            title: "How We Use Information",
            items: [
                "Process orders and deliver services.",
                "Send marketing communications (if opted-in).",
                "Improve website and product offerings.",
            ],
        },
        {
            title: "Data Protection",
            items: [
                "Your personal information is never shared with third parties, except for order fulfillment (e.g., courier partners).",
                "We use SSL encryption and secure payment gateways."

            ],
        },
        {
            title: "Sharing With Third Parties",
            items: [
                "With service providers for order fulfillment.",
                "Legal or regulatory obligations.",
                "Business transfers in case of mergers/acquisitions.",
            ],
        },
        {
            title: "Your Rights",
            items: [
                "Access your data.",
                "Request correction or deletion.",
                "Opt-out of marketing communications.",
            ],
        },
        {
            title: "Data Retention",
            items: [
                "We retain data for as long as necessary to fulfill the purposes.",
                "Follow legal obligations for retention periods.",
            ],
        },
        {
            title: "Security Measures",
            items: [
                "Encryption and secure storage of sensitive data.",
                "Regular audits and monitoring.",
                "Employee training on data protection.",
            ],
        },
    ];
    return (
        <div>
            <Breadcrumb className="custom-padding mt-5">
                <BreadcrumbList>
                    {/* Home */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    {/* Cart */}
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-red-700">Privacy Policy</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-2xl font-bold custom-padding mt-2">Privacy Policy : X11 Super Sports</h2>
            <p className="custom-padding text-[#808080] mt-2">Last Updated: 25/06/2025</p>

            {/* <section className="mb-10 mt-5">
                    <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4 gap-2">
                        <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">
                            1
                        </span>
                        Information We Collect
                    </h2>


                    <ul className="list-disc list-inside space-y-2 pl-5 text-gray-700">
                        <li>Personal details: name, email, phone, shipping/billing address.</li>
                        <li>Payment details (securely processed via trusted gateways)</li>
                        <li>Browsing data like cookies, device info, and preferences.</li>
                    </ul>
                </section> */}
            <div className="custom-padding">

                {sections.map((section, index) => (
                    <section key={index} className="mb-10 mt-5">
                        <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4 gap-2">
                            <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">
                                {index + 1}
                            </span>
                            {section.title}
                        </h2>
                        <ul className="list-disc list-inside space-y-2 pl-5 text-gray-700">
                            {section.items.map((item, subIndex) => (
                                <li key={subIndex}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ))}

            </div>


        </div>


    )
}
