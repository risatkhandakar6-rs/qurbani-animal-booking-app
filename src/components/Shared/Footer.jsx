import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa6'

const socials = [
  { name: 'Facebook', icon: FaFacebookF },
  { name: 'Instagram', icon: FaInstagram },
  { name: 'YouTube',  icon: FaYoutube },
  { name: 'WhatsApp', icon: FaWhatsapp },
]

export default function Footer() {
  return (
    <footer className="bg-[#10261A] text-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">
            Eid<span className="text-[#4CAF4F]">Livestock</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            We help families find healthy, well-cared-for cows and goats for
            Qurbani. Every animal is checked for health and quality before it is
            listed, so you can choose with confidence and make your Qurbani a
            blessed one.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-[#4CAF4F]">Home</Link></li>
            <li><Link href="/allAnimals" className="hover:text-[#4CAF4F]">All Animals</Link></li>
            <li><Link href="/login" className="hover:text-[#4CAF4F]">Login</Link></li>
            <li><Link href="/register" className="hover:text-[#4CAF4F]">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 shrink-0 text-[#4CAF4F]" />
              <span>Narsingdi Sadar, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="shrink-0 text-[#4CAF4F]" />
              <a href="tel:+8801700000000" className="hover:text-white">+880 1700-000000</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-[#4CAF4F]" />
              <a href="mailto:info@eidlivestock.com" className="hover:text-white">info@eidlivestock.com</a>
            </li>
          </ul>

          {/* Social links */}
          <div className="mt-6 flex gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4CAF4F]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} EidLivestock. All rights reserved.
      </div>
    </footer>
  )
}