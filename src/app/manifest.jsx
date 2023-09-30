export default function manifest() {
  return {
    name: 'Teoricentralen',
    short_name: 'Teoricentralen',
    description: 'Teoricentralen - en utbildningsplattform för körkortsteori',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
