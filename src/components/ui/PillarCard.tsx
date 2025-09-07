import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Pillar, BaseComponentProps } from '@/types'

interface PillarCardProps extends BaseComponentProps {
  pillar: Pillar
}

export default function PillarCard({ pillar, className }: PillarCardProps) {
  const { title, description, imageUrl, borderColor } = pillar
  return (
    <div className={`bg-card rounded-xl border-2 ${borderColor} p-6 shadow-soft hover:shadow-lg transition-shadow duration-300`}>
      {/* Image */}
      <div className="relative w-full h-40 md:h-48">
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
      
      <div className="mt-4 space-y-3">
        {/* Title */}
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-foreground/70 leading-relaxed">
          {description}
        </p>
        
        {/* Button */}
        <Button variant="outline" className="w-full rounded-full">
          View Profile
        </Button>
      </div>
    </div>
  )
}