import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Footer(){
  return(
    <footer className="relative border-t-2 border-slate-300">
      <div className="flex xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mt-8 justify-between px-16">
        <div className="flex flex-col mx-2">
          <Link href="/" className="flex gap-2 text-orange-400 font-bold text-xl">
            <Dumbbell />
            <span>Fitness Nepal</span>
          </Link>
          <p className="mb-2">Your Partner in Health and Wellness</p>
          <div className='gap-2 flex mb-4'>
              <a href="https://github.com/bibekgurung9" target='blank'>
                <Button variant='outline' className='md:text-xl' id='fitness'>
                  <FaGithub />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/bibekgurung9/" target='blank'>
                <Button variant='outline' className='md:text-xl' id='cardio'>
                  <FaLinkedin />
                </Button>
              </a>
              <a href="https://twitter.com/_BibekGurung" target='blank'>
                <Button variant='outline' className='d:text-xl' id='diet'>
                  <FaTwitter />
                </Button>
              </a>
          </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p><span className="font-bold text-orange-500">Email:</span> info@fitnessnepal.com</p>
          <p><span className="font-bold text-orange-500">Phone:</span> +1 (123) 456-7890</p>
        </div>

        </div>

        <div className="flex flex-col mx-2">
          <h2 className="text-orange-500 font-bold">Navigation</h2>
          <ul className="">
            <Link href={'/home'}><li>Home</li></Link>
            <Link href={'/about'}><li>About</li></Link>
            <Link href={'/contact'}><li>Contact</li></Link>
            <Link href={'/enroll'}><li>Enroll</li></Link>
            <Link href={'/exercises'}><li>Exercises</li></Link>
          </ul>
        </div>

        <div className="flex flex-col mx-2">
          <h2 className="text-orange-500 font-bold">Quick Links</h2>
          <ul className="">
            <Link href={'/#'}><li>Terms & Conditions</li></Link>
            <Link href={'/#'}><li>License</li></Link>
            <Link href={'/#'}><li>Legal Policies</li></Link>
          </ul>
        </div>

        <div className="flex flex-col mx-2">
          <h2 className="text-orange-500 font-bold">Contact Me</h2>
          <ul className="">
            <a href='https://github.com/bibekgurung9' target='blank'><li>Github</li></a>
            <a href='https://www.linkedin.com/in/bibekgurung9/' target='blank'><li>Linkedin</li></a>
            <a href='https://twitter.com/_BibekGurung' target='blank'><li>Twitter</li></a>
          </ul>
        </div>
      </div>
      
      <p className="text-center mt-4 text-xl">This Project Was Made My <a href="https://github.com/bibekgurung9" className="text-orange-500 font-bold hover:text-orange-500/80" target="blank">Bibek Gurung</a></p>
    </footer>
  )
}