// components/GallerySection.tsx
import { galleryImages } from '@/data/gallery';

export default function GallerySection() {
  return (
    <section id="galeria" className="mt-10 py-10 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
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
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <p className="text-sm m-1">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}