import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface PillarCardProps {
  title: string
  description: string
  imageUrl: string
  borderColor: string
}

export default function PillarCard({ title, description, imageUrl, borderColor }: PillarCardProps) {
  return (
    <div className={`bg-card rounded-xl border-2 ${borderColor} p-4 shadow-sm transition-shadow hover:shadow-md`}>
      {/* Image */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
          loading="lazy"
        />
      </div>
      
      {/* Title */}
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Button */}
      <Button variant="outline" className="w-full">
        View Profile
      </Button>
    </div>
  )
}