import {connect} from '@/dbconfig/dbConfig';
import User from '@/models/userModel';
import {NextApiRequest, NextApiResponse} from 'next';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';



connect();

export async function POST(request: NextRequest){
    try{
        const reqbody = await request.json();
        const {name, email, password} = reqbody;
        console.log(reqbody);
        const isUser = await User.findOne({email: email});
        if(isUser){
            return NextResponse.json({error: "User already exists"});
        }

        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(password, salt);

        const user = new User({
            name: name,
            email: email,
            password: hash
        });

        const savedUser = await user.save();

        return NextResponse.json({
            user: savedUser,
            success: true,
            status: 200,
            message: "User created successfully"
        });

    }catch(error: any){
        return NextResponse.json({error: error.message}{status: 500});
    }
}