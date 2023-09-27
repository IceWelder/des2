import Link from "next/link";

export default function Nav () {
    return(
        <section>
             <ul className="flex space-x-4 ">
            <li>
              <Link href="/equipes" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Equipes
              </Link>
            </li>
            <li>
              <Link href="/page2" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Piasta
              </Link>
            </li>
            <li>
              <Link href="/page3" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Calendario
              </Link>
            </li>
          </ul>
        </section>
    )
}