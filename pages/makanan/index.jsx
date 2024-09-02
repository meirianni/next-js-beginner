import Link from "next/link"

const MakananPage = () => {
    return (
        <>
        <ul>
            <li>
                <a href="/makanan/burger">li burger</a>
            </li>
        </ul>
        <Link href={"/makanan/burger"}>Link burger</Link>
        </>
    )
}

export default MakananPage