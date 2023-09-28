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
              <Link href="/momentos" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Momentos
              </Link>
            </li>
            <li>
              <Link href="/momentos" className="bg-gradient-to-r from-yellow-400 to-green-500 hover:from-green-500 hover:to-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded">
               Senna
              </Link>
            </li>
          </ul>
        </section>
    )
}