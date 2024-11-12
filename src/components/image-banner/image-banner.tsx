export default function ImageBanner({ text, className }: { text: string; className?: string }) {
  return (
    <div className="flex w-full bg-black/80 p-1">
      <p className={`text-white text-sm ml-2 ${className}`}>{text}</p>
    </div>
  )
}
