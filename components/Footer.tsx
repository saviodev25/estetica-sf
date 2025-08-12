// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente

  return (
    <footer id="contato" className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold tracking-wider">
              Estética SF Santos
            </h2>
            <p className="text-sm">
              Especialistas em detalhamento e cuidado automotivo. Transformamos seu carro em uma obra de arte.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#galeria" className="hover:text-white transition-colors">Galeria</Link></li>
              <li><Link href="#contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Rua Exemplo, 123 - Canabrava, Malhada-BA</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                <a href='https://wa.me/77997008905'>(77)99700-8905</a>
              </li>
                <li className="flex items-center justify-center md:justify-start">
                    <a 
                    href="https://www.instagram.com/estetica_sf_santos1" // <-- SUBSTITUA PELO INSTAGRAM CORRETO
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Estética SF Santos"
                    className="w-5 h-5 mr-2 text-gray-400 hover:text-white transition-colors">
                    <svg 
                    className="w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    
                </a>
                    <a href="https://www.instagram.com/estetica_sf_santos1">Estética SF Santos</a>
                </li>
            </ul>
            
          </div>
        </div>
        
        {/* Linha de Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Estética SF Santos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}