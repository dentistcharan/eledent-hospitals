import { Building2, Zap, HeartPulse, ShieldCheck, Info } from "lucide-react";

const facilities = [
    {
        icon: Building2,
        title: "Telangana State Government Health Reimbursement",
        org: "TS Govt. Employees",
        content: "All Telangana State Government employees can avail themselves of treatment under the state reimbursement scheme.",
    },
    {
        icon: Zap,
        title: "Empanelled with TG TRANSCO",
        org: "TRANSCO Employees",
        content: "Employees of the Transmission Corporation of Telangana are eligible for reimbursement facilities as per applicable rules.",
    },
    {
        icon: HeartPulse,
        title: "Empanelled with MediBuddy",
        org: "Corporate Employees",
        content: "Corporate employees covered through MediBuddy health benefits can avail eligible cashless/reimbursement services.",
    },
    {
        icon: ShieldCheck,
        title: "Insurance Tie-up Available",
        org: "Toothlens Insurance",
        content: "Eledent Hospital is associated with Toothlens Insurance for eligible dental insurance benefits.",
    },
];

export default function FacilitiesSection() {
    return (
        <section className="home-about-bg">
            <div className="my-10 lg:mt-12 lg:mb-0 mx-4 sm:mx-8 lg:mx-24">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                        <div>
                            <div className="w-fit bg-primary text-white px-2 py-0.5 text-sm font-semibold mb-3">
                                Facilities & Insurance
                            </div>
                            <h2 className="text-2xl lg:text-4xl font-bold text-primary leading-tight mb-1">
                                Coverage at Eledent Hospital
                            </h2>
                            <p className="text-base text-gray-500 sm:text-right">
                                Government & corporate insurance schemes accepted across all branches.
                            </p>
                        </div>

                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {facilities.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-4"
                                >
                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-base font-bold text-gray-800 leading-snug mb-1">
                                            {item.title}
                                        </p>
                                        <p className="text-sm font-semibold text-primary mb-3">
                                            {item.org}
                                        </p>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom note */}
                    <div className="flex items-start gap-2 mt-6">
                        <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-500">
                            For eligibility, coverage & claim details, please contact Eledent Hospital directly.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
