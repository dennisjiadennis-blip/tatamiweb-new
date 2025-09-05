import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface MasterCardProps {
  name: string
  field: string
  slug: string
  imageUrl: string
}

export default function MasterCard({ name, field, slug, imageUrl }: MasterCardProps) {
  return (
    <Link href={`/masters/${slug}`}>
      <div className="bg-card rounded-xl border p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg cursor-pointer">
        {/* Master Image */}
        <div className="relative w-full h-60 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} - ${field} Master`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        {/* Master Information */}
        <div className="mt-4">
          <h3 className="font-serif text-lg font-bold text-foreground">
            {name}
          </h3>
          <p className="text-gray-500 mt-1">
            {field}
          </p>
          
          {/* View Profile Button */}
          <Button 
            variant="outline" 
            className="w-full mt-4"
          >
            View Profile
          </Button>
        </div>
      </div>
    </Link>
  )
}