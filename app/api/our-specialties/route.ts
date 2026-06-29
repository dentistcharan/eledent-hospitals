import { NextResponse } from "next/server";
import { getSpecialtiesData } from "@/lib/specialties-api";

export async function GET() {
    try {
        const data = await getSpecialtiesData();
        if (!data) {
            return NextResponse.json(
                { success: false, message: "Failed to fetch data" },
                { status: 502 }
            );
        }

        return NextResponse.json(
            { success: true, data },
            {
                headers: {
                    "Cache-Control":
                        "public, s-maxage=3600, stale-while-revalidate=86400",
                },
            }
        );
    } catch {
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
