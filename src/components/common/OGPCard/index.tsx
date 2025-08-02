import Link from "next/link"
import OGPImage from "../OGPImage"

interface OGPCardProps {
  url: string
  title: string
  description?: string
  image?: string
  siteName?: string
  showDescription?: boolean
}

export default function OGPCard({ url, title, description, image, siteName, showDescription = true }: OGPCardProps) {
  const domain = new URL(url).hostname

  return (
    <Link 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <OGPImage image={image} title={title} url={domain} />
      {showDescription && (
        <div className="p-4">
          <h3 className="font-semibold text-brown-900 mb-1 line-clamp-2">
            {title}
          </h3>
          {description && (
          <p className="text-sm text-brown-600 mb-2 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center gap-2 text-xs text-brown-500">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>{siteName || domain}</span>
        </div>
      </div>
    )}
    </Link>
  )
}