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
                        "no-store, max-age=0",
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
