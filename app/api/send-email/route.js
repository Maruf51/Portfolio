// app/api/create-item/route.js

import { sendEmail } from "@/utils/mail.utils";

export async function POST(request) {
    const body = await request.json()

    const sender = {
        name: 'Portfolio',
        address: 'portfolio@example.com'
    }
    const receipients = {
        name: 'Maruf Hossain',
        address: 'hossain815265@gmail.com'
    }

    try {
        const result = await sendEmail({
            sender,
            receipients,
            subject: 'From Portfolio',
            message: `<div>
                <h1>Hi there <strong>Maruf</strong></h1>
                <h2>I am ${body.name} - ${body.email}</h2>
                </br>
                <p>${body.message}</p>
            </div>`
        })

        return new Response(JSON.stringify(result), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        });
    }
}
