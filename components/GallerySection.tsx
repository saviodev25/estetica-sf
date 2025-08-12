// components/GallerySection.tsx
import { galleryImages } from '@/data/gallery';

export default function GallerySection() {
  return (
    <section id="galeria" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Nossa Galeria de Trabalhos
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Resultados que falam por si.
          </p>
        </div>
        
        {/* Grid da Galeria */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              {/* Opcional: Overlay com o texto alternativo */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-4">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}