import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [ 
    //   '/advogados/', 
    //   '/lideres/', 
    //   '/partidos/', 
    //   '/escritorios/', 
    //   '/templates/',  
    //   '/clientes/'
    ],
      
    },
    sitemap: 'https://laillagaleno.cc/sitemap.xml',
  }
}