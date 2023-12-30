"use clent"
import { useSession } from "next-auth/react";
import React, { useEffect }  from "react";

interface SignedInProps {
    children: React.ReactNode;
}
export function SignedOut({ children }: SignedInProps) {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    if (loading) {
        return null;
    }

    if (session) {
        return null;
    }

    return <>{children}</>;

}

export function SignedIn({ children }: SignedInProps) {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    useEffect(() => {
        if (session) {
            console.log(session);
        }
    }, [session]);

    if (loading) {
        return null;
    }

    if (!session) {
        return null;
    }


    return <>{children}</>;
}
