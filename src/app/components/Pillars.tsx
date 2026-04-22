import { useState } from 'react';
import { BookOpen, Users, Lightbulb, Globe, Cpu } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const pillars = [
  {
    id: 'educacao',
    label: 'Educação',
    icon: BookOpen,
    color: '#C22235',
    description:
      'Formação contínua com cursos, frameworks e workshops exclusivos para dominar as ferramentas da nova era do conhecimento.',
    detail: [
      'Cursos e trilhas na B\'Academy',
      'Frameworks proprietários',
      'Workshops semanais ao vivo',
      'Biblioteca de templates',
    ],
  },
  {
    id: 'mentoria',
    label: 'Mentoria',
    icon: Users,
    color: '#f87171',
    description:
      'Acompanhamento individual e em grupo com mentores de alto nível para destravar gargalos e acelerar resultados mensuráveis.',
    detail: [
      'Sessões 1:1 mensais',
      'Grupo de accountability',
      'Sprints de execução',
      'Review de performance',
    ],
  },
  {
    id: 'consultoria',
    label: 'Consultoria',
    icon: Lightbulb,
    color: '#e05969',
    description:
      'Visão estratégica profunda do seu negócio. Diagnóstico 360°, posicionamento premium e plano de ação personalizado.',
    detail: [
      'Diagnóstico 360º',
      'Posicionamento premium',
      'Método proprietário',
      'Plano de ação customizado',
    ],
  },
  {
    id: 'comunidade',
    label: 'Comunidade',
    icon: Globe,
    color: '#C22235',
    description:
      'Rede exclusiva de experts de alto nível com masterminds privados, parcerias estratégicas e eventos que transformam negócios.',
    detail: [
      'Masterminds privados',
      'Rede de parceiros premium',
      'Eventos exclusivos',
      'Co-criação de projetos',
    ],
  },
  {
    id: 'tecnologia',
    label: 'Tecnologia',
    icon: Cpu,
    color: '#961a29',
    description:
      'IA, automações e infraestrutura tecnológica para escalar sem aumentar equipe. Tecnologia como alavanca do seu crescimento.',
    detail: [
      'Agentes de IA 24/7',
      'Automação de fluxos',
      'Integrações e APIs',
      'Auditoria tech stack',
    ],
  },
];

export function Pillars() {
  const [active, setActive] = useState(0);

  return (
    <section id="pilares" className="py-24 relative overflow-hidden" style={{ background: '#000' }}>
       {/* Background glow */}
       <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 80% 20%, rgba(194,34,53,0.08) 0%, transparent 60%)`,
          }}
        />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" direction="up">
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-[#C22235] tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(194,34,53,0.1)',
              border: '1px solid rgba(194,34,53,0.25)',
            }}
          >
            Os 5 pilares
          </div>
          <h2 className="text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800 }}>
            A base do{' '}
            <span style={{ color: '#C22235' }}>ecossistema</span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Interactive Progress Bars List */}
          <div className="flex-1 w-full lg:max-w-md flex flex-col gap-4">
            {pillars.map((p, i) => {
              const isActive = i === active;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className="group relative w-full text-left p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: isActive ? 'linear-gradient(90deg, rgba(194,34,53,0.15), rgba(194,34,53,0.05))' : 'rgba(255,255,255,0.03)',
                    border: isActive ? '1px solid rgba(194,34,53,0.3)' : '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Progress Bar Background Effect */}
                  <div 
                    className="absolute inset-y-0 left-0 bg-[#C22235]/10 transition-all duration-500 ease-out rounded-l-xl"
                    style={{ 
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0
                    }} 
                  />

                  <div className="relative flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                        style={{ 
                          background: isActive ? '#C22235' : 'rgba(255,255,255,0.05)',
                          color: isActive ? 'white' : '#6b7280'
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-bold mb-0.5 tracking-wider">
                          Pilar 0{i + 1}
                        </div>
                        <div 
                          className="font-bold transition-colors duration-300"
                          style={{ 
                            color: isActive ? '#fff' : '#9ca3af',
                            fontSize: '1rem'
                          }}
                        >
                          {p.label}
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow/Chevron */}
                    <div 
                      className={`text-gray-500 transition-transform duration-300 ${isActive ? 'rotate-90 text-[#C22235]' : ''}`}
                    >
                      →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="flex-1 w-full">
            <div className="sticky top-24">
              <AnimatedSection key={active} direction="right" className="bg-neutral-900/50 p-8 sm:p-10 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#C22235]/10 rounded-xl border border-[#C22235]/20">
                    {(() => {
                      const ActiveIcon = pillars[active].icon;
                      return <ActiveIcon size={32} className="text-[#C22235]" />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {pillars[active].label}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-400 leading-relaxed mb-8 text-balance">
                  {pillars[active].description}
                </p>

                <div className="space-y-4">
                  <div className="text-xs font-bold text-gray-500 tracking-widest mb-4">
                    O que está incluso
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {pillars[active].detail.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C22235] shadow-[0_0_8px_rgba(194,34,53,0.6)]" />
                        <span className="text-sm text-gray-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <button 
                    onClick={() => document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#C22235] font-bold text-sm hover:text-[#e05969] transition-colors flex items-center gap-2"
                  >
                    SAIBA MAIS SOBRE {pillars[active].label} 
                    <span>→</span>
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
