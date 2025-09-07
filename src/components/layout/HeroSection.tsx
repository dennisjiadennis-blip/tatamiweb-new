import { Button } from '@/components/ui/button'
import Container from '@/components/ui/Container'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      className="min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/Gemini_Generated_Image_vcie91vcie91vcie.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <Container className="relative z-10">
        <motion.div 
          className="bg-card/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-soft border border-black/5 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Main Title */}
          <motion.h1 
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            A Story Woven with a Master
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="font-sans text-lg text-foreground/80 mt-4 mb-8 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            More than travel, it's dialogue of creation. Connect with master craftsmen through immersive experiences and discover the wisdom embedded in every gesture, every tradition.
          </motion.p>
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full hover:scale-105 transition-transform duration-200"
              onClick={() => window.location.href = '/masters'}
            >
              Meet Our Masters
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}