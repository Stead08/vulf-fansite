'use client'

import Image from "next/image"
import { useState } from "react"

interface OGPImageProps {
  image?: string
  title: string
  className?: string
  url?: string // Optional URL for the image, not used in this component but can be useful for context
}

export default function OGPImage({ image, title, url,  className = '' }: OGPImageProps) {
  const [imageError, setImageError] = useState(false)

  if (image && !imageError) {
    return (
      <div className={`relative aspect-[1.91/1] bg-cream-100 ${className}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="text-white">
            <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
            {url && (
              <p className="text-xs text-white/80 line-clamp-1 mt-0.5">{url}</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`aspect-[1.91/1] bg-cream-100 flex items-center justify-center ${className}`}>
      <svg className="w-16 h-16 text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  )
}

