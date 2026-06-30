// Devuelve la ruta de un recurso de /public respetando el `base` de Astro.
// En local (base "/") -> "/assets/x.svg"
// En GitHub Pages   -> "/demo-restaurante-mediterraneo/assets/x.svg"
// Úsalo siempre para imágenes y enlaces internos: asset('/assets/foto.svg')
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // sin barra final
  const clean = path.replace(/^\//, ''); // sin barra inicial
  return `${base}/${clean}`;
};
