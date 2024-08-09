"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError(props: { error: unknown }) {
    useEffect(() => {
        // TODO better error logging
        console.error(props.error);
    }, [props.error]);

    return (
        <html>
            <body>
                <Error statusCode={500} title="Error" />
            </body>
        </html>
    );
}
