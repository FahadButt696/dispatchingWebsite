import { motion } from 'framer-motion'
import { ArrowDown, Phone, MessageCircle, Truck, Clock, Users, Award } from 'lucide-react'

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = "+15551234567" // Replace with your actual phone number
    const message = "Hello! I'm interested in your dispatching services."
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234567" // Replace with your actual phone number
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      {/* Hero Image */}
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional freight truck on highway"
          loading="lazy"
        />
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional <span className="highlight">Dispatching</span> Services
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Connecting shippers with reliable carriers nationwide. Fast, efficient, and professional freight dispatching solutions for your business.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="btn-primary"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Get Quote on WhatsApp
            </motion.button>
            
            <motion.button 
              className="btn-secondary"
              onClick={handleCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Call Now
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Truck size={24} />
              <div>
                <h3>500+</h3>
                <p>Active Carriers</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Clock size={24} />
              <div>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Users size={24} />
              <div>
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Award size={24} />
              <div>
                <h3>99%</h3>
                <p>Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToServices}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
