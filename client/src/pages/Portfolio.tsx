import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * DDA-Web Portfolio Page
 * Design Philosophy: Modern & Technological
 * - Showcase of fictional projects
 * - Case studies with results
 * - Interactive portfolio gallery
 */

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Restaurante Sabor da Terra",
      category: "Negócio Profissional",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/GTsgJhGx8zunqtwsnDjmXb/sandbox/alC7eOmzfqdcSveQCEcWC5-img-4_1770486193000_na1fn_ZGRhLXdlYi1wb3J0Zm9saW8tcGxhY2Vob2xkZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR1RzZ0poR3g4enVucXR3c25Eam1YYi9zYW5kYm94L2FsQzdlT216ZnFkY1N2ZVFDRWNXQzUtaW1nLTRfMTc3MDQ4NjE5MzAwMF9uYTFmbl9aR1JoTFhkbFlpMXdiM0owWm05c2FXOHRjR3hoWTJWb2IyeGtaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rkI6~nIcyah4GtLIGyxnJB1URSSBjSXKyvCx3izbvsrtBZeivXVAOlaBOI9CbIrDEhRoueZvtAEAAH4jJ6lgMb9jQyb5ia1kN-oC73nibGifkPIsWAzbiqKgmJVm612f2MesoiMMkpjHj9IgClGNi~a-FSnJFVvaw5qdyyYLYxhkRg8EowL6JTEb1MsbpZ6XPFc0JPdt3X~dxvNkzJrvuPM4cCbWW0Toyf5i25-Nx3guayjHs2jkFYeJ~KIWUDVhVwS93O10DmHe7PPHDEOVZS5yMGz5W1Wusk1Jf4grUGZLtaMq2lwtTY5zpDEx7LzWBWSTzf0E4RiRv5kXozzlog__",
      description: "Site profissional para restaurante com cardápio digital e integração WhatsApp",
      challenge: "O restaurante tinha presença fraca nas redes sociais e perdia clientes por não ter um site profissional.",
      solution: "Criámos um site moderno com cardápio digital, galeria de pratos, reservas online e botão WhatsApp direto.",
      results: [
        "Aumento de 40% em consultas de clientes",
        "Redução de 50% em chamadas telefônicas (via WhatsApp)",
        "Melhor apresentação profissional",
        "Integração com redes sociais",
      ],
      technologies: ["React", "Tailwind CSS", "WhatsApp API"],
      package: "Negócio Profissional",
      price: "70.000 Kz",
    },
    {
      id: 2,
      title: "Consultoria JM - Landing Page",
      category: "Vendas & Captação",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/GTsgJhGx8zunqtwsnDjmXb/sandbox/alC7eOmzfqdcSveQCEcWC5-img-5_1770486197000_na1fn_ZGRhLXdlYi1jdGEtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR1RzZ0poR3g4enVucXR3c25Eam1YYi9zYW5kYm94L2FsQzdlT216ZnFkY1N2ZVFDRWNXQzUtaW1nLTVfMTc3MDQ4NjE5NzAwMF9uYTFmbl9aR1JoTFhkbFlpMWpkR0V0ZG1semRXRnMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fHeIAmWDusO1Z8gMI0P2tlqk2qal~pE8f0OQ2E4DdQk4ZkvyiTQct8td3X-yLz8zsxXWMReCpX17JAzCA8iVZHhXcy6xSR6twjTUdaoP9ftMq2~ZyBQ6Ci1rc5eMLvpsgExZ0M03okq~2k68J3h33QG3aUvbuNgZD~Ak4DcvC~3gIeA-t7bAPuIeEjgzRRy2Dh~c1j0~jerH7AjJMLcKFI4jX3MS1hotSavQhkv2YdMYTk03PBNbYblAuVHBiwjVQx4U8vSGaqFo67ZfiVdW8nyTwdCasppBHBnFRTitZeTb-v~srCjYx7AxKniJ0XmQDxihYw3yNCdv~kegFvdbBw__",
      description: "Landing page otimizada para captação de leads de consultoria empresarial",
      challenge: "Consultora precisava de uma página focada em conversão para seus anúncios no Facebook.",
      solution: "Desenvolvemos uma landing page com copywriting estratégico, CTA otimizado e integração com WhatsApp para captar leads.",
      results: [
        "Taxa de conversão de 12%",
        "Custo por lead reduzido em 35%",
        "Mais de 50 consultas no primeiro mês",
        "ROI positivo em 2 semanas",
      ],
      technologies: ["React", "Tailwind CSS", "Email Marketing", "WhatsApp"],
      package: "Vendas & Captação",
      price: "120.000 Kz",
    },
    {
      id: 3,
      title: "Salão de Beleza Estilo",
      category: "Presença Online",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/GTsgJhGx8zunqtwsnDjmXb/sandbox/alC7eOmzfqdcSveQCEcWC5-img-3_1770486193000_na1fn_ZGRhLXdlYi1zZXJ2aWNlcy1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvR1RzZ0poR3g4enVucXR3c25Eam1YYi9zYW5kYm94L2FsQzdlT216ZnFkY1N2ZVFDRWNXQzUtaW1nLTNfMTc3MDQ4NjE5MzAwMF9uYTFmbl9aR1JoTFhkbFlpMXpaWEoyYVdObGN5MXBiR3gxYzNSeVlYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pPrueVirQsOW9OaA8ylJNCZaXAZhz2qAdhpSCnesz6U~4ZR30BzlpO6wcvWuWM~~ciA-MzY~xNh-dSgLGyUDlphFCldIlyO9yHmnWAeYe0EiT0Ufmz8hWKDxcpxB~q3gvlq1h9NJb2kKSNDk5kCpDmT9RHpN2r2hJOBXAEVI72YZQWa7JwDSLwbCIS9bCMkUELciZ8cnTgoGtJ4lsarnCEMG47xNG8l7O8FpXkZh7gDun7RzjZ6O0CA~3Y5-iPPTBhwPbKRl2ycKOGgzEWV0yy6Wg7tsU3ApWF4BVbrO9MV6UUNdsAps3bXC7zu6FmQcqRMMKnuW6OVbWvsfx~oQgg__",
      description: "One Page simples e elegante para salão de beleza com agendamento via WhatsApp",
      challenge: "Salão pequeno precisava de presença online rápida e acessível.",
      solution: "Criámos uma página one-page limpa com galeria de serviços, preços e botão WhatsApp para agendamentos.",
      results: [
        "Presença online estabelecida em 3 dias",
        "Aumento de 25% em agendamentos",
        "Melhor profissionalismo",
        "Pagamento único, sem mensalidades",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WhatsApp API"],
      package: "Presença Online",
      price: "35.000 Kz",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container text-center">
          <h1 className="font-display text-5xl mb-4">Nosso Portfólio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos projetos que desenvolvemos e os resultados alcançados
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer transition-all duration-300 group"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <Card className="card-modern overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-accent/20 to-secondary/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-accent text-sm font-semibold">{project.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6">
                    <h3 className="font-display text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                    {/* Expandable Details */}
                    {selectedProject === project.id && (
                      <div className="space-y-4 pt-4 border-t border-border animate-in fade-in">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Desafio:</h4>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Solução:</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Resultados:</h4>
                          <ul className="space-y-1">
                            {project.results.map((result, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-accent">✓</span>
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="p-6 pt-0 border-t border-border/50">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">{project.package}</p>
                        <p className="font-semibold text-accent">{project.price}</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        Ver Detalhes <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projetos Entregues" },
              { number: "98%", label: "Clientes Satisfeitos" },
              { number: "3.2x", label: "ROI Médio" },
              { number: "7 dias", label: "Entrega Média" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-4xl text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-6">Quer um Projeto Como Estes?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Cada projeto é único e customizado para as necessidades específicas do seu negócio. Vamos criar algo incrível juntos!
          </p>
          <Button className="btn-primary gap-2 text-lg px-8 py-6">
            Solicitar Orçamento <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
