import dynamic from 'next/dynamic'

const Studio = dynamic(() => import('./studio'), {ssr: false})

export {metadata, viewport} from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}