import {getToken} from 'next-auth/jwt'
import prisma from '@/lib/db/prisma';
export async function POST(req , res) {

    const token = await getToken({req});
    try{     
    const body = await req.json();
    const {name , price , discountPerMonth, coupleDiscount, discountPerYear  } = body;

    if (!name || !price || !discountPerMonth || !discountPerYear || !coupleDiscount) {
        return res.status(400).json({ error: "All fields are required" });
    }
    if(token.role !== 'admin') {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const ofer = await prisma.offer.create({
        data:{
            name,
            price,
            discountPerMonth,
            discountPerYear,
            coupleDiscount
        }
    })
    return res.json({ ofer }, { status: 201 });
}catch (err) {
    console.log("[BILLBOARDS_POST]", err);
    return Response.json({ error: "Internal server error " }, { status: 500 });
  }
   
}