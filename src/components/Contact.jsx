import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
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

  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: handleCall,
      clickable: true
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "info@dispatchpro.com",
      action: () => window.location.href = "mailto:info@dispatchpro.com",
      clickable: true
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: "123 Business Ave, Suite 100, City, State 12345",
      action: null,
      clickable: false
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "24/7 Support Available",
      action: null,
      clickable: false
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Ready to streamline your freight operations? Contact us today for a free consultation</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>
              We're here to help you with all your freight dispatching needs. 
              Reach out to us through any of the methods below, and we'll get back to you promptly.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className={`contact-method ${method.clickable ? 'clickable' : ''}`}
                  onClick={method.action}
                  whileHover={method.clickable ? { scale: 1.02 } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {method.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{method.title}</h4>
                    <p>{method.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="freight-dispatching">Freight Dispatching</option>
                  <option value="load-planning">Load Planning</option>
                  <option value="emergency-dispatch">Emergency Dispatch</option>
                  <option value="carrier-management">Carrier Management</option>
                  <option value="cost-optimization">Cost Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your freight needs..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Get Started?</h3>
          <p>Contact us today for a free consultation and discover how we can help optimize your freight operations.</p>
          
          <div className="cta-buttons">
            <motion.button 
              className="btn-whatsapp"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.button>
            
            <motion.button 
              className="btn-call"
              onClick={handleCall}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={20} />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
