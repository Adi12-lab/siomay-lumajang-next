import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://siomaylumajang.com',
      lastModified: new Date(),
    },
  ]
}