import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
);

export async function createToken(payload:any) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('60s')
    .sign(secret)
}

export async function verifyToken(token: string) {
    try{
        const { payload } = await jwtVerify(token, secret);
        return payload;
    }catch(error){
        return NextResponse.json(
            {error: "Invalid token"},
            { status:400}
        )
    }
}

export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;


    if(!token) return null;

    return await verifyToken(token);
}