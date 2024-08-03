import Link from 'next/link'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

const TitleSec = ({ pageTitle, pageLink }: { pageTitle: string, pageLink: string }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <h3 className="galaxy-gradient-text text-2xl lg:text-3xl font-bold">{pageTitle}</h3>

      <Link href={pageLink} className="flex gap-x-1 text-gray-400 group transition-colors">
        <span className="text-sm group-hover:galaxy-gradient-text">بیشتر</span>
        <IconArrowNarrowLeft stroke={1.5} className="group-hover:text-white" />
      </Link>
    </section>
  )
}

export default TitleSec