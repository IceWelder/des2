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
              <Link href="/momentos" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
               Momentos
              </Link>
            </li>
            <li>
              <Link href="/senna" className="bg-gradient-to-r from-yellow-400 to-green-500 hover:from-green-500 hover:to-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded">
               Senna
              </Link>
            </li>
            <li>
              <Link href="/vettel" className="bg-gradient-to-r from-black via-red-700 to-yellow-500 hover:from-yellow-500 hover:to-red-700 text-white font-semibold py-2 px-4 rounded">
               Vettel
              </Link>
            </li>
          </ul>
        </section>
    )
}