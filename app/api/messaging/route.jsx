import React from 'react';



export async function POST(request) {
    const { email, name, message } = await request.json();
}