import { NextResponse } from "next/server";
import { getServicesData } from "@/lib/services-api";

export async function GET() {
    try {
        const data = await getServicesData();

        return NextResponse.json(
            { data },
            {
                status: 200,
                headers: {
                    "Cache-Control":
                        "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            }
        );
    } catch (error) {
        console.error("Internal services API error:", error);

        return NextResponse.json(
            { error: "Something went wrong while loading services." },
            { status: 500 }
        );
    }
}
