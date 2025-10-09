import { motion } from 'framer-motion'
import { Award, Users, Target, TrendingUp, Truck, Clock, Shield, Star } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: <Truck size={30} />,
      number: "500+",
      label: "Active Carriers",
      description: "Verified and reliable carriers in our network"
    },
    {
      icon: <Users size={30} />,
      number: "1000+",
      label: "Happy Clients",
      description: "Satisfied customers across the nation"
    },
    {
      icon: <Target size={30} />,
      number: "99%",
      label: "Success Rate",
      description: "On-time delivery and customer satisfaction"
    },
    {
      icon: <TrendingUp size={30} />,
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and proven track record"
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About DispatchPro</h2>
            <p className="about-intro">
              We are a leading freight dispatching company with over 15 years of experience in the transportation industry. 
              Our mission is to connect shippers with reliable carriers while ensuring efficient, cost-effective, and 
              professional freight solutions.
            </p>
            
            <div className="about-features">
              <motion.div 
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4>Professional Excellence</h4>
                <p>Our team of experienced dispatchers ensures every shipment is handled with the highest level of professionalism and attention to detail.</p>
              </motion.div>
              
              <motion.div 
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4>24/7 Support</h4>
                <p>Round-the-clock customer support and monitoring to ensure your freight is always moving and you're always informed.</p>
              </motion.div>
              
              <motion.div 
                className="feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4>Technology-Driven</h4>
                <p>Advanced dispatching software and real-time tracking systems provide transparency and efficiency in every shipment.</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional logistics and dispatching team"
                loading="lazy"
              />
              <div className="image-overlay">
                <Truck size={60} />
                <p>Professional Freight Dispatching</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="achievements"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
              <div className="achievement-description">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
