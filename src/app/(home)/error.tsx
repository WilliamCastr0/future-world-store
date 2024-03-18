'use client';

import { useEffect } from "react";


export default function Error({ error, reset }: ErrorPageProps) {

    useEffect(() => {
        console.log(error);
    })

    return (
        <>
            <h1>Ups!</h1>
            <p>An error has ocurrend</p>
            <button onClick={reset}>Try Again!</button>
        </>
    )
}