import prisma from "@repo/db/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const markets = await prisma.markets.findMany();

    return NextResponse.json({markets})
}