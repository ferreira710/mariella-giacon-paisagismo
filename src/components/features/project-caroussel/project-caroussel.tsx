'use client'

import ImageBanner from '@/components/image-banner'
import type { ProjectCarouselProps } from '@/types/project-caroussel'
import { images } from '@/utils'
import { useEffect, useState } from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ProjectCarousel({ projectKey }: ProjectCarouselProps) {
  const [projectImages, setProjectImages] = useState<string[]>([])

  useEffect(() => {
    const projectImages = images[projectKey] || []
    setProjectImages(projectImages)
  }, [projectKey])

  return (
    <>
      <Swiper
        modules={[A11y, Pagination, Navigation]}
        pagination={{ clickable: true }}
        centeredSlides
        keyboard
        a11y={{
          prevSlideMessage: 'Imagem anterior',
          nextSlideMessage: 'Próxima imagem',
          firstSlideMessage: 'Primeira imagem do carrossel',
          lastSlideMessage: 'Última imagem do carrossel'
        }}
        navigation
      >
        {projectImages.map((imgSrc) => (
          <SwiperSlide key={imgSrc} className="items-center justify-center self-center">
            <img
              className="object-cover w-full h-full"
              src={imgSrc}
              alt={`Imagem do projeto ${projectKey}`}
            />
            {(projectKey === 'projeto00' || projectKey === 'projeto01') && (
              <ImageBanner className="" text="Fotografia: Fávaro Jr." />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
