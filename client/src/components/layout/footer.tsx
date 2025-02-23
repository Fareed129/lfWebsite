import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              LINGUA FRANCA SCHOOL OF IT & LANGUAGE
            </h3>
            <p className="text-gray-400">
              Empowering students with quality IT education in Haldwani since
              2010.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/admission"
                  className="hover:text-primary transition-colors"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                opp. Bank of Baroda ATM, Kunwarpur choraha, Haldwani,
                Uttarakhand
              </p>
              <p>Phone: +91 84455 38849</p>
              <p>Email: office4lf@gmail.com</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/share/15E8EKtqxM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/lingua_franca.ed?igsh=bm4zdjNpejc1M2t3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} LINGUA FRANCA SCHOOL OF IT &
            LANGUAGE. All rights reserved.
          </p>
          <p>Design & Developed by- Mo. Fareed</p>
        </div>
      </div>
    </footer>
  );
}
