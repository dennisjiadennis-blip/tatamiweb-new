import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Master, BaseComponentProps } from '@/types'

interface MasterCardProps extends Pick<Master, 'name' | 'field' | 'imageUrl' | 'slug'>, BaseComponentProps {}

export default function MasterCard({ name, field, imageUrl, slug }: MasterCardProps) {
  return (
    <Link href={`/masters/${slug}`} className="block">
      <div className="bg-card rounded-xl border p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg cursor-pointer">
        {/* Master Image */}
        <div className="relative w-full h-60">
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
          <Button variant="outline" className="w-full mt-4">
            View Profile
          </Button>
        </div>
      </div>
    </Link>
  )
}