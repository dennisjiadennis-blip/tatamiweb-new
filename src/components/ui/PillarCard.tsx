import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface PillarCardProps {
  title: string
  description: string
  imageUrl: string
  borderColor: string
}

export default function PillarCard({ 
  title, 
  description, 
  imageUrl, 
  borderColor 
}: PillarCardProps) {
  return (
    <div className={`bg-card rounded-xl p-4 border-2 ${borderColor} shadow-sm hover:shadow-md transition-shadow duration-300`}>
      {/* Image Section */}
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>
      
      {/* Content Section */}
      <div className="space-y-3">
        <h3 className="font-serif text-xl font-bold text-foreground">
          {title}
        </h3>
        
        <p className="text-foreground/70 text-sm leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          size="sm"
          className="w-full mt-4"
        >
          View Profile
        </Button>
      </div>
    </div>
  )
}