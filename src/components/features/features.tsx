'use client'

import * as Dialog from '@radix-ui/react-dialog'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { thumbnails } from '@/utils'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { type SetStateAction, useEffect, useRef, useState } from 'react'
import ProjectCarousel from './project-caroussel'
import ThumbnailCarousel from './thumbnail-caroussel'

export default function Features() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const tabs = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tabs.current?.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  }, [])

  return (
    <section id="portfolio" className="relative bg-secondary text-text">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-6xl pb-8 md:pb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Portfólio</h2>
            <p className="text-xl">
              Nossa proposta final é feita depois de entender todas as necessidades, características
              e escolha de cada projeto. No entanto através deste portfólio, você poderá ter uma
              ideia base dos nossos serviços.
            </p>
          </div>
          <ThumbnailCarousel
            thumbnails={thumbnails}
            onSelectProject={(project: SetStateAction<string | null>) => {
              setSelectedProject(project)
              setOpen(true)
            }}
          />
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/90 z-50" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl items-center justify-center"
            aria-describedby="dialog-description"
          >
            <VisuallyHidden.Root>
              <Dialog.Title>Projetos</Dialog.Title>
              <Dialog.Description className="sr-only">
                Modal com as fotos dos projetos.
              </Dialog.Description>
            </VisuallyHidden.Root>
            {selectedProject && (
              <ProjectCarousel
                projectKey={selectedProject}
                onClose={() => {
                  setOpen(false)
                  setSelectedProject(null)
                }}
              />
            )}
            <Dialog.Close className="absolute top-4 right-0 z-[150]" asChild>
              <button
                className="material-symbols-outlined justify-center text-white hover:bg-black p-2"
                type="button"
                aria-label="Fechar"
              >
                close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
