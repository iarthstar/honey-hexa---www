import { ORIGIN } from '@/constants'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${ORIGIN}`,
    },
  ]
}