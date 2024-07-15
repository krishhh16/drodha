import prisma from "@repo/db/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const markets = await prisma.markets.findMany();

    return NextResponse.json({markets})
}

export async function POST(req: NextRequest) {
    const {crypto} : {crypto: string} = await req.json();

    const cryptoDetails = await prisma.markets.findFirst({
        where: {
            sym: crypto
        }
    })

    return NextResponse.json({cryptoDetails})
}