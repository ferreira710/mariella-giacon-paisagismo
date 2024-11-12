export interface ThumbnailCarouselProps {
  thumbnails: Record<string, string>
  onSelectProject: (project: string) => void
}
