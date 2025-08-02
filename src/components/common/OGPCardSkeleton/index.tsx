export default function OGPCardSkeleton() {
  return (
    <div className="block bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
      <div className="aspect-[1.91/1] bg-cream-200"></div>
      <div className="p-4">
        <div className="h-5 bg-cream-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-cream-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-cream-200 rounded w-1/3"></div>
      </div>
    </div>
  )
}