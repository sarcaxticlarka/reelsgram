// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import User from "@/models/User";
 

// export async function POST(request:NextRequest){
//     try{
//         const {email, password} = await request.json()
//         if(!email || !password){
//             return NextResponse.json(
//                 {error:"Email and password are required"},
//                 {status:400}
//             )
//         }
//         await connectToDatabase()

//         const existingUser = await User.findOne({email})
//         if(existingUser){
//             return NextResponse.json(
//                 {error:"Email aready exist"},
//                 {status:400}
//             )
//         }

//         await User.create({
//             email,
//             password
//         })

//         return NextResponse.json(
//             {message:"User created Sucessfully"},
//             {status:201}
//         )


//     }catch(error){
//         return NextResponse.json(
//             {error:"Failed to create new user"},
//             {status:500}
//         )
//     }
// }

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { error: "Email already exists" },
                { status: 400 }
            );
        }

        await User.create({ email, password });

        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );

    } catch (error) {
        console.error("Registration Error:", error); // Log the error
        return NextResponse.json(
            { error: "Failed to create new user", details: (error as Error).message },
            { status: 500 }
        );
    }
}
