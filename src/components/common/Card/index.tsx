import Image from "next/image"
import Link from "next/link"

interface CardProps {
  title: string
  excerpt?: string
  date?: string
  image?: string
  href: string
  tags?: string[]
}

export default function Card({ title, excerpt, date, image, href, tags }: CardProps) {
  return (
    <article className="relative card overflow-hidden group h-full flex flex-col">
      {/* Image */}
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Date */}
        {date && <time className="text-sm text-brown-600 mb-2">{date}</time>}

        {/* Title */}
        <h3 className="text-xl font-display font-semibold text-brown-900 mb-3 group-hover:text-forest-600 transition-colors">
          <Link href={href} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        {excerpt && <p className="text-brown-700 mb-4 line-clamp-3 flex-grow">{excerpt}</p>}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-cream-200 text-brown-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
