import { auth } from "@/auth";


interface SignedInProps {
    children: React.ReactNode;
}
export async function SignedOut({ children }: SignedInProps) {
    const data = await auth();


    // if (loading) {
    //     return null;
    // }

    if (data) {
        return null;
    }

    return <>{children}</>;

}

export async function SignedIn({ children }: SignedInProps) {
    const data = await auth();

    if (!data) {
        return null;
    }


    return <>{children}</>;
}
