export default function sitemap() {
  return [
    {
      url: 'https://ai1team.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://ai1team.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://ai1team.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ai1team.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ai1team.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://ai1team.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
