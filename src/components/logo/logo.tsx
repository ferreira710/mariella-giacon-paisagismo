import { Image } from '@nextui-org/image'

export default function Logo() {
  return (
    <div className="flex h-auto w-full justify-center bg-background p-8">
      <Image
        className="min-w-full h-[128px] md:h-[192px]"
        alt="Logo contendo o nome do escritório: Mariella Giacon"
        src={'/assets/static/logoSite.png'}
      />
    </div>
  )
}
