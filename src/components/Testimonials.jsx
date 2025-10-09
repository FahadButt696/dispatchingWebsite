import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Logistics",
      role: "Operations Manager",
      rating: 5,
      content: "DispatchPro has been instrumental in streamlining our freight operations. Their 24/7 support and professional service have exceeded our expectations.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Chen Transport",
      role: "Owner",
      rating: 5,
      content: "The team at DispatchPro understands the freight industry inside and out. They've helped us reduce costs while improving delivery times significantly.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Rodriguez Shipping",
      role: "Dispatch Manager",
      rating: 5,
      content: "Professional, reliable, and always available when we need them. DispatchPro has become an essential partner in our business operations.",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      company: "Thompson Freight",
      role: "CEO",
      rating: 5,
      content: "Outstanding service and support. DispatchPro's technology and expertise have transformed how we handle our freight dispatching needs.",
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      company: "Wang Logistics",
      role: "Operations Director",
      rating: 5,
      content: "The level of professionalism and attention to detail is unmatched. DispatchPro consistently delivers results and exceeds our expectations.",
      avatar: "LW"
    },
    {
      name: "Robert Martinez",
      company: "Martinez Transport",
      role: "Owner",
      rating: 5,
      content: "DispatchPro has been a game-changer for our business. Their expertise and dedication have helped us grow and succeed in the competitive freight market.",
      avatar: "RM"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
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
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from our satisfied customers</p>
        </motion.div>

        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card featured"
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonials[currentIndex].name}</h4>
                    <div className="testimonial-company">{testimonials[currentIndex].company}</div>
                    <div className="testimonial-role">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="star-filled" size={18} />
                  ))}
                </div>
                
                <div className="testimonial-quote">
                  <Quote size={24} />
                </div>
                
                <p className="testimonial-content">
                  "{testimonials[currentIndex].content}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="carousel-controls">
              <motion.button 
                className="carousel-btn prev"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button 
                className="carousel-btn next"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
