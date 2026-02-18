import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Zap, Target, Users, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

/**
 * DDA-Web Home Page
 * Design Philosophy: Modern & Technological
 * - Dark background (#0A0A0A) with electric blue accents (#007BFF)
 * - Asymmetric layout with generous whitespace
 * - Poppins for display, Inter for body
 * - Geometric elements and network patterns
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="font-display text-5xl lg:text-6xl leading-tight">
                  A Sua Empresa na Era da{" "}
                  <span className="text-accent">Inteligência Artificial</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Criamos sites profissionais, rápidos e otimizados para
                  converter visitantes em clientes. Tecnologia de ponta para
                  empresas que não querem ficar para trás.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/quote">
                  <Button className="btn-primary gap-2">
                    Calcular Orçamento <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-border hover:border-accent"
                  >
                    Ver Portfólio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center border border-accent/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-accent font-semibold">
                    Transformação Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-3xl text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">
                Projetos Entregues
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">
                Clientes Satisfeitos
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl text-accent mb-2">
                7 dias
              </div>
              <p className="text-sm text-muted-foreground">Entrega Média</p>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl text-accent mb-2">3.2x</div>
              <p className="text-sm text-muted-foreground">ROI Médio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl mb-4">Nossos Pacotes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Escolha o pacote ideal para seu negócio ou solicite uma solução
              personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Package 1 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="font-display text-lg">Presença Online</h3>
                <p className="text-xs text-muted-foreground">Para começar</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">35.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>1 página</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>WhatsApp integrado</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Responsivo</span>
                </li>
              </ul>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </Card>

            {/* Package 2 */}
            <Card className="card-modern border-accent/50 ring-1 ring-accent/30">
              <div className="mb-4">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  Mais Popular
                </span>
                <div className="text-3xl mb-2 mt-2">💼</div>
                <h3 className="font-display text-lg">Profissional</h3>
                <p className="text-xs text-muted-foreground">Empresa séria</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">70.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Até 5 páginas</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>SEO básico</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Formulário</span>
                </li>
              </ul>
              <Link href="/services">
                <Button className="btn-primary w-full">Ver Detalhes</Button>
              </Link>
            </Card>

            {/* Package 3 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-display text-lg">Vendas & Captação</h3>
                <p className="text-xs text-muted-foreground">Gerar clientes</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">120.000</span>
                  <span className="text-muted-foreground text-sm">Kz</span>
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Landing page</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Copywriting</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Otimizado</span>
                </li>
              </ul>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </Card>

            {/* Package 4 */}
            <Card className="card-modern">
              <div className="mb-4">
                <div className="text-3xl mb-2">✨</div>
                <h3 className="font-display text-lg">Personalizado</h3>
                <p className="text-xs text-muted-foreground">Sua solução</p>
              </div>
              <div className="mb-4 pb-4 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl">A partir de</span>
                </div>
                <p className="text-sm text-accent">20.000 Kz</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Escopo definido</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Orçamento fechado</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Flexível</span>
                </li>
              </ul>
              <Link href="/quote">
                <Button className="btn-primary w-full">Calcular</Button>
              </Link>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="gap-2">
                Ver Todos os Pacotes <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <h2 className="font-display text-4xl mb-12 text-center">
            Por Que Escolher DDA-Web?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Velocidade",
                desc: "Entrega rápida sem comprometer qualidade",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Foco no Cliente",
                desc: "Sua satisfação é nossa prioridade",
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Inovação",
                desc: "Tecnologias modernas e IA",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Parceria",
                desc: "Crescemos juntos com você",
              },
            ].map((item, idx) => (
              <Card key={idx} className="card-modern text-center">
                <div className="text-accent mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">Projetos Recentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja alguns dos projetos que desenvolvemos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Restaurante Sabor da Terra",
                category: "Negócio Profissional",
              },
              {
                title: "Consultoria JM - Landing Page",
                category: "Vendas & Captação",
              },
              { title: "Salão de Beleza Estilo", category: "Presença Online" },
            ].map((project, idx) => (
              <Card key={idx} className="card-modern overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-accent mb-2">{project.category}</p>
                  <h3 className="font-semibold">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio">
              <Button variant="outline" className="gap-2">
                Ver Portfólio Completo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">
              Últimos Artigos do Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fique atualizado com as últimas tendências em web design,
              marketing digital e tecnologia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Web Design Moderno em 2025",
                excerpt:
                  "Descubra as tendências mais quentes em web design para 2025.",
                category: "Web Design",
                icon: "🎨",
              },
              {
                title: "SEO para Pequenas Empresas",
                excerpt:
                  "Aprenda como otimizar seu site para os motores de busca.",
                category: "Marketing",
                icon: "🔍",
              },
              {
                title: "Inteligência Artificial no Web Design",
                excerpt: "A IA está transformando o web design. Descubra como.",
                category: "Tecnologia",
                icon: "🤖",
              },
            ].map((article, idx) => (
              <Card
                key={idx}
                className="hover:border-accent transition-all group"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{article.icon}</div>
                  <p className="text-xs text-accent mb-2">{article.category}</p>
                  <h3 className="font-semibold mb-3 group-hover:text-accent transition">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                Ver Todos os Artigos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30 border-t border-border">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl mb-4">
              Entre em Contacto Conosco
            </h2>
            <p className="text-muted-foreground">
              Preencha o formulario abaixo e entraremos em contacto em breve.
            </p>
          </div>
          <div className="bg-background/50 border border-border rounded-lg p-8 mb-8">
            <ContactForm />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="btn-primary gap-2">
                Calcular Orçamento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">Saber Mais Sobre Nós</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center text-muted-foreground text-sm">
        <div className="container">
          <p>&copy; 2025 DDA-Web. Todos os direitos reservados.</p>
          <p className="mt-2">
            Transformando negócios com tecnologia e inovação.
          </p>
        </div>
      </footer>
    </div>
  );
}
