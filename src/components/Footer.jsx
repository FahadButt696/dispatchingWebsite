import { motion } from 'framer-motion'
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "+15551234567" // Replace with your actual phone number
    const message = "Hello! I'm interested in your dispatching services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234567" // Replace with your actual phone number
  }

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Truck size={24} />
              <h3>DispatchPro</h3>
            </div>
            <p>
              Professional freight dispatching services connecting shippers with reliable carriers nationwide. 
              Fast, efficient, and reliable solutions for your business.
            </p>
          </div>

          <div className="footer-contact">
            <a href="tel:+15551234567" className="contact-item">
              <Phone size={18} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:info@dispatchpro.com" className="contact-item">
              <Mail size={18} />
              <span>info@dispatchpro.com</span>
            </a>
            <div className="contact-item">
              <MapPin size={18} />
              <span>123 Business Ave, Suite 100</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 DispatchPro. All rights reserved.</p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="social-link"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
