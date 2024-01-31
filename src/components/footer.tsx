import Link from "next/link";

export default function Footer(){
  return(
    <footer>
      <div className="flex md:grid-cols-4 sm:grid-cols-2 mt-12 justify-between px-16">
        <div>
          Col 1
        </div>
        <div className="flex flex-col items-center">
          <h2>Navigation</h2>
          <ul className="">
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2>Quick Links</h2>
          <ul className="">
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2>Contact Me</h2>
          <ul className="">
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
            <Link href={'/#'}><li>Home</li></Link>
          </ul>
        </div>
      </div>
      
      <p className="text-center mt-4 text-xl">This Project Was Made My <a href="www.github.com/bibekgurung9" className="" target="blank">Bibek Gurung</a></p>
    </footer>
  )
}