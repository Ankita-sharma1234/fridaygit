import Link from "next/link"

export default function StudentList() {
    return (
        <div>
            <ul>
                <li><Link href="/studentlist/1">Anjali</Link></li>
                <li><Link href="/studentlist/2">Thapa</Link></li>
                <li><Link href="/studentlist/3">naivi</Link></li>
                <li><Link href="/studentlist/4">ishika</Link></li>
                <li><Link href="/studentlist/5">golu</Link></li>
            </ul>
        </div>
    )
}