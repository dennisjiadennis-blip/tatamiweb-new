import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Master, BaseComponentProps } from '@/types'

interface MasterCardProps extends BaseComponentProps {
  master: Master
}

export default function MasterCard({ master, className }: MasterCardProps) {
  const { imageUrl, slug, i18n } = master
  const { name, field } = i18n.en
  return (
    <Link href={`/masters/${slug}`} className="block">
      <motion.div 
        className="bg-card rounded-xl border border-transparent hover:border-border-subtle p-4 shadow-soft transition-shadow duration-300 hover:shadow-lg cursor-pointer relative tatami-texture"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Master Image */}
        <div className="relative w-full h-64 md:h-72">
          <Image
            src={imageUrl}
            alt={`${name} - ${field}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        
        {/* Master Info */}
        <div className="mt-4">
          {/* Name */}
          <h3 className="font-serif text-lg font-bold text-foreground">
            {name}
          </h3>
          
          {/* Field */}
          <p className="text-gray-500 mt-1">
            {field}
          </p>
          
          {/* View Profile Button */}
          <Button variant="outline" className="w-full mt-4 rounded-full transition-colors hover:bg-primary/5">
            View Profile
          </Button>
        </div>
      </motion.div>
    </Link>
  )
}