import Navbar from "@/components/Navbar";
import { MySelf } from "@/data/myself";

export default function Page(){
    return (
        <>
        <Navbar currentPage="dreams"/>
        <main className="flex min-h-screen flex-col mt-10 md:px-24 px-5">
            <h1>aa</h1>
            <div dangerouslySetInnerHTML={{__html: MySelf()}}/>
        </main>
        </>
    )
}