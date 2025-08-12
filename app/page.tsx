import GallerySection from "@/components/GallerySection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 bg-gray-900 text-white">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Serviços de Estética Automotiva</h1>
          <p className="text-lg text-gray-400">Qualidade e atenção aos detalhes que seu carro merece.</p>
        </div>

        {/* Seção de Serviços */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              features={service.features}
            />
          ))}
        </div>
      <GallerySection/>    
</main>
  );
}