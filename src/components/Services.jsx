import { motion } from 'framer-motion'
import { Truck, MapPin, Clock, Shield, DollarSign, Headphones } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Truck size={40} />,
      title: "Freight Dispatching",
      description: "Professional freight dispatching services connecting shippers with reliable carriers across the nation.",
      features: [
        "Real-time load tracking",
        "Carrier verification",
        "Route optimization",
        "24/7 monitoring"
      ]
    },
    {
      icon: <MapPin size={40} />,
      title: "Load Planning",
      description: "Strategic load planning and optimization to maximize efficiency and reduce transportation costs.",
      features: [
        "Route optimization",
        "Load consolidation",
        "Fuel cost analysis",
        "Delivery scheduling"
      ]
    },
    {
      icon: <Clock size={40} />,
      title: "Emergency Dispatch",
      description: "Round-the-clock emergency dispatching services for urgent shipments and time-critical deliveries.",
      features: [
        "24/7 availability",
        "Rapid response",
        "Priority handling",
        "Real-time updates"
      ]
    },
    {
      icon: <Shield size={40} />,
      title: "Carrier Management",
      description: "Comprehensive carrier management including verification, insurance, and performance monitoring.",
      features: [
        "Carrier verification",
        "Insurance tracking",
        "Performance metrics",
        "Compliance monitoring"
      ]
    },
    {
      icon: <DollarSign size={40} />,
      title: "Cost Optimization",
      description: "Advanced cost optimization strategies to reduce transportation expenses and improve profitability.",
      features: [
        "Rate negotiation",
        "Volume discounts",
        "Fuel optimization",
        "Cost analysis"
      ]
    },
    {
      icon: <Headphones size={40} />,
      title: "Customer Support",
      description: "Dedicated customer support team providing assistance and updates throughout the shipping process.",
      features: [
        "Dedicated account manager",
        "Real-time tracking",
        "Issue resolution",
        "Regular updates"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive dispatching solutions tailored to meet your business needs</p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
