import type { ThumbnailCarouselProps } from '@/types/thumbnail-caroussel'
import Image from 'next/image'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ThumbnailCarousel({ thumbnails, onSelectProject }: ThumbnailCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={16}
      breakpoints={{
        540: { slidesPerView: 2 },
        768: { slidesPerView: 3 }
      }}
      a11y={{
        prevSlideMessage: 'Imagem anterior',
        nextSlideMessage: 'Próxima imagem',
        firstSlideMessage: 'Primeira imagem do carrossel',
        lastSlideMessage: 'Última imagem do carrossel'
      }}
      pagination={{ clickable: true }}
      navigation
      keyboard
      className="h-96"
    >
      {Object.entries(thumbnails).map(([project, image]) => (
        <SwiperSlide key={project}>
          <Image
            src={image}
            width={1000}
            height={1000}
            quality={100}
            alt={`Thumbnail do projeto ${project}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => onSelectProject(project)}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelectProject(project)
              }
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
