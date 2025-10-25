import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Wrench, 
  Leaf, 
  Paintbrush, 
  Settings, 
  Camera, 
  Shield, 
  Home,
  Star,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import './App.css';

// Importar imagens
import logoBranco from './assets/logo-branco.png';
import logoVerde from './assets/logo-verde.png';
import bannerPt from './assets/rancho_cia_banner_pt_corrigido.png';
import servicoEletrica from './assets/servico-eletrica.webp';
import servicoHidraulica from './assets/servico-hidraulica.jpg';
import servicoJardinagem from './assets/servico-jardinagem.jpg';
import servicoPintura from './assets/servico-pintura.jpeg';
import servicoReparos from './assets/servico-reparos.png';
import servicoCameras from './assets/servico-cameras.jpg';
import servicoAlarmes from './assets/servico-alarmes.png';
import servicoAlugueis from './assets/servico-alugueis.jpeg';
import rancho1 from './assets/rancho-1.jpg';
import rancho2 from './assets/rancho-2.jpg';
import rancho3 from './assets/rancho-3.jpg';
import rancho4 from './assets/rancho-4.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: ''
  });

  const servicos = [
    {
      id: 'eletrica',
      titulo: 'Elétrica',
      descricao: 'Instalações elétricas, manutenção, reparos e modernização de sistemas elétricos residenciais e comerciais.',
      icone: Zap,
      imagem: servicoEletrica,
      detalhes: [
        'Instalação de tomadas e interruptores',
        'Quadros elétricos e disjuntores',
        'Iluminação LED e decorativa',
        'Chuveiros e aquecedores elétricos',
        'Diagnóstico de problemas elétricos'
      ]
    },
    {
      id: 'hidraulica',
      titulo: 'Hidráulica',
      descricao: 'Serviços completos de instalação, manutenção e reparo de sistemas hidráulicos.',
      icone: Wrench,
      imagem: servicoHidraulica,
      detalhes: [
        'Instalação de tubulações',
        'Reparo de vazamentos',
        'Desentupimentos',
        'Instalação de torneiras e registros',
        'Sistemas de irrigação'
      ]
    },
    {
      id: 'jardinagem',
      titulo: 'Jardinagem',
      descricao: 'Criação, manutenção e paisagismo de jardins, gramados e áreas verdes.',
      icone: Leaf,
      imagem: servicoJardinagem,
      detalhes: [
        'Paisagismo e design de jardins',
        'Plantio e manutenção de gramados',
        'Poda de árvores e arbustos',
        'Sistemas de irrigação automática',
        'Limpeza e conservação de áreas verdes'
      ]
    },
    {
      id: 'pintura',
      titulo: 'Pintura',
      descricao: 'Pintura residencial e comercial com acabamento profissional e materiais de qualidade.',
      icone: Paintbrush,
      imagem: servicoPintura,
      detalhes: [
        'Pintura interna e externa',
        'Preparação de superfícies',
        'Texturas decorativas',
        'Pintura de portões e grades',
        'Consultoria em cores'
      ]
    },
    {
      id: 'reparos',
      titulo: 'Reparos',
      descricao: 'Serviços gerais de manutenção e reparo para manter sua propriedade sempre em ordem.',
      icone: Settings,
      imagem: servicoReparos,
      detalhes: [
        'Reparos em portas e janelas',
        'Conserto de fechaduras',
        'Pequenos reparos estruturais',
        'Manutenção preventiva',
        'Serviços de marcenaria'
      ]
    },
    {
      id: 'cameras',
      titulo: 'Câmeras',
      descricao: 'Instalação e manutenção de sistemas de câmeras de segurança para proteção total.',
      icone: Camera,
      imagem: servicoCameras,
      detalhes: [
        'Câmeras de segurança HD/4K',
        'Sistemas de monitoramento remoto',
        'Instalação de DVR/NVR',
        'Configuração de aplicativos móveis',
        'Manutenção preventiva'
      ]
    },
    {
      id: 'alarmes',
      titulo: 'Alarmes',
      descricao: 'Sistemas de alarme residencial e comercial para máxima segurança e tranquilidade.',
      icone: Shield,
      imagem: servicoAlarmes,
      detalhes: [
        'Alarmes residenciais e comerciais',
        'Sensores de movimento e abertura',
        'Centrais de monitoramento',
        'Sistemas sem fio',
        'Integração com aplicativos'
      ]
    },
    {
      id: 'alugueis',
      titulo: 'Aluguéis',
      descricao: 'Aluguel de ranchos e propriedades rurais para lazer, eventos e temporadas.',
      icone: Home,
      imagem: servicoAlugueis,
      detalhes: [
        'Ranchos para fins de semana',
        'Propriedades para eventos',
        'Casas de campo por temporada',
        'Estrutura completa de lazer',
        'Suporte durante a estadia'
      ]
    }
  ];

  // Dados de exemplo de ranchos disponíveis para aluguel
  const ranchosDisponiveis = [
    {
      id: 1,
      nome: 'Rancho Vista Verde',
      localizacao: 'Santa Fé do Sul - SP',
      preco: 'R$ 350/dia',
      capacidade: '8 pessoas',
      imagem: rancho1,
      comodidades: ['Piscina', 'Churrasqueira', 'Wi-Fi', 'Ar Condicionado', 'Cozinha Completa'],
      descricao: 'Rancho aconchegante com vista para a natureza, perfeito para relaxar com a família.',
      disponivel: true
    },
    {
      id: 2,
      nome: 'Sítio Águas Claras',
      localizacao: 'Jales - SP',
      preco: 'R$ 280/dia',
      capacidade: '6 pessoas',
      imagem: rancho2,
      comodidades: ['Piscina', 'Campo de Futebol', 'Área Gourmet', 'Estacionamento'],
      descricao: 'Propriedade rural com ampla área verde e estrutura completa para eventos.',
      disponivel: true
    },
    {
      id: 3,
      nome: 'Casa de Campo Serenidade',
      localizacao: 'Santa Fé do Sul - SP',
      preco: 'R$ 450/dia',
      capacidade: '12 pessoas',
      imagem: rancho3,
      comodidades: ['Piscina Aquecida', 'Sauna', 'Academia', 'Jardim', 'Sala de Jogos'],
      descricao: 'Casa de luxo no campo com todas as comodidades para uma estadia inesquecível.',
      disponivel: false
    },
    {
      id: 4,
      nome: 'Chácara Bela Vista',
      localizacao: 'Jales - SP',
      preco: 'R$ 320/dia',
      capacidade: '10 pessoas',
      imagem: rancho4,
      comodidades: ['Piscina', 'Quadra Poliesportiva', 'Playground', 'Cozinha Gourmet'],
      descricao: 'Chácara familiar com excelente estrutura para lazer e descanso.',
      disponivel: true
    }
  ];

  // Estado para controlar a seção ativa de aluguéis
  const [secaoAluguel, setSecaoAluguel] = useState('disponíveis'); // 'disponíveis' ou 'cadastrar'
  const [dadosRancho, setDadosRancho] = useState({
    nome: '',
    localizacao: '',
    preco: '',
    capacidade: '',
    comodidades: '',
    descricao: '',
    telefone: '',
    email: ''
  });

  const depoimentos = [
    {
      nome: 'Maria Silva',
      servico: 'Elétrica',
      comentario: 'Excelente serviço! Resolveram o problema elétrico do meu rancho rapidamente e com muito profissionalismo.',
      avaliacao: 5
    },
    {
      nome: 'João Santos',
      servico: 'Jardinagem',
      comentario: 'Transformaram meu jardim! O paisagismo ficou lindo e a manutenção é sempre impecável.',
      avaliacao: 5
    },
    {
      nome: 'Ana Costa',
      servico: 'Câmeras',
      comentario: 'Sistema de segurança instalado perfeitamente. Agora tenho total tranquilidade no meu sítio.',
      avaliacao: 5
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const mensagem = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Serviço: ${formData.servico}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5517992174138?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Funções para o cadastro de ranchos
  const handleRanchoInputChange = (e) => {
    const { name, value } = e.target;
    setDadosRancho(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRanchoSubmit = (e) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp com dados do rancho
    const mensagem = `Olá! Gostaria de cadastrar meu rancho para aluguel:
    
Nome do Rancho: ${dadosRancho.nome}
Localização: ${dadosRancho.localizacao}
Preço por dia: ${dadosRancho.preco}
Capacidade: ${dadosRancho.capacidade}
Comodidades: ${dadosRancho.comodidades}
Descrição: ${dadosRancho.descricao}
Telefone: ${dadosRancho.telefone}
Email: ${dadosRancho.email}`;
    
    const whatsappUrl = `https://wa.me/5517992174138?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logoVerde} alt="Rancho & Cia" className="h-16 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-green-800 hover:text-green-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('servicos')} className="text-green-800 hover:text-green-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('alugueis')} className="text-green-800 hover:text-green-600 transition-colors">Aluguéis</button>
              <button onClick={() => scrollToSection('sobre')} className="text-green-800 hover:text-green-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('contato')} className="text-green-800 hover:text-green-600 transition-colors">Contato</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-200">
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-green-800 hover:text-green-600 transition-colors py-2">Início</button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-green-800 hover:text-green-600 transition-colors py-2">Serviços</button>
                <button onClick={() => scrollToSection('alugueis')} className="text-left text-green-800 hover:text-green-600 transition-colors py-2">Aluguéis</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-green-800 hover:text-green-600 transition-colors py-2">Sobre</button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-green-800 hover:text-green-600 transition-colors py-2">Contato</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <img src={bannerPt} alt="Rancho & Cia Banner" className="mx-auto max-w-4xl w-full h-auto rounded-lg shadow-lg" />
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              O maior hub de serviços e soluções
            </h2>
            <p className="text-xl text-green-700 mb-8">
              Atendemos Santa Fé do Sul, Jales e região - SP com excelência e profissionalismo em todos os serviços para seu rancho, sítio ou propriedade rural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3"
                onClick={() => scrollToSection('servicos')}
              >
                Ver Serviços
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3"
                onClick={() => window.open('https://wa.me/5517992174138', '_blank')}
              >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para manter sua propriedade sempre em perfeitas condições.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicos.map((servico) => {
              const IconeServico = servico.icone;
              return (
                <Card key={servico.id} className="group hover:shadow-xl transition-all duration-300 border-green-200 hover:border-green-400">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={servico.imagem} 
                      alt={servico.titulo}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-green-900/20 group-hover:bg-green-900/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                      <IconeServico className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{servico.titulo}</CardTitle>
                    <CardDescription>{servico.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      {servico.detalhes.slice(0, 3).map((detalhe, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {detalhe}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-green-700 hover:bg-green-800"
                      onClick={() => scrollToSection('contato')}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aluguéis Section */}
      <section id="alugueis" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Ranchos para Aluguel</h2>
            <p className="text-xl text-gray-600">Encontre o rancho perfeito ou cadastre o seu para aluguel</p>
          </div>

          {/* Tabs para alternar entre seções */}
          <div className="flex justify-center mb-12">
            <div className="bg-green-100 p-1 rounded-lg">
              <button
                onClick={() => setSecaoAluguel('disponíveis')}
                className={`px-6 py-3 rounded-md transition-colors ${
                  secaoAluguel === 'disponíveis' 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-700 hover:bg-green-200'
                }`}
              >
                Ranchos Disponíveis
              </button>
              <button
                onClick={() => setSecaoAluguel('cadastrar')}
                className={`px-6 py-3 rounded-md transition-colors ${
                  secaoAluguel === 'cadastrar' 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-700 hover:bg-green-200'
                }`}
              >
                Cadastrar Rancho
              </button>
            </div>
          </div>

          {/* Seção de Ranchos Disponíveis */}
          {secaoAluguel === 'disponíveis' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {ranchosDisponiveis.map((rancho) => (
                <Card key={rancho.id} className="border-green-200 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={rancho.imagem} 
                      alt={rancho.nome}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={rancho.disponivel ? "default" : "secondary"}
                        className={rancho.disponivel ? "bg-green-600" : "bg-gray-500"}
                      >
                        {rancho.disponivel ? "Disponível" : "Ocupado"}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-green-800">{rancho.nome}</CardTitle>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{rancho.localizacao}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{rancho.descricao}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-green-700">{rancho.preco}</div>
                      <div className="text-gray-600">{rancho.capacidade}</div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Comodidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {rancho.comodidades.map((comodidade, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {comodidade}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className={`w-full ${
                        rancho.disponivel 
                          ? 'bg-green-700 hover:bg-green-800' 
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!rancho.disponivel}
                      onClick={() => {
                        if (rancho.disponivel) {
                          const mensagem = `Olá! Tenho interesse no ${rancho.nome} em ${rancho.localizacao}. Gostaria de mais informações sobre disponibilidade e reserva.`;
                          const whatsappUrl = `https://wa.me/5517992174138?text=${encodeURIComponent(mensagem)}`;
                          window.open(whatsappUrl, '_blank');
                        }
                      }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {rancho.disponivel ? 'Reservar Agora' : 'Indisponível'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Seção de Cadastro de Rancho */}
          {secaoAluguel === 'cadastrar' && (
            <div className="max-w-2xl mx-auto">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Cadastre seu Rancho</CardTitle>
                  <CardDescription>
                    Preencha as informações do seu rancho e entraremos em contato para finalizar o cadastro
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRanchoSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="nome"
                          placeholder="Nome do rancho"
                          value={dadosRancho.nome}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="localizacao"
                          placeholder="Localização (cidade - estado)"
                          value={dadosRancho.localizacao}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="preco"
                          placeholder="Preço por dia (ex: R$ 300)"
                          value={dadosRancho.preco}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="capacidade"
                          placeholder="Capacidade (ex: 8 pessoas)"
                          value={dadosRancho.capacidade}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="comodidades"
                        placeholder="Comodidades (separadas por vírgula)"
                        value={dadosRancho.comodidades}
                        onChange={handleRanchoInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Textarea
                        name="descricao"
                        placeholder="Descrição do rancho"
                        value={dadosRancho.descricao}
                        onChange={handleRanchoInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="telefone"
                          placeholder="Seu telefone/WhatsApp"
                          value={dadosRancho.telefone}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Seu e-mail"
                          value={dadosRancho.email}
                          onChange={handleRanchoInputChange}
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Cadastrar Rancho
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src={bannerPt} 
              alt="Rancho & Cia - Tudo pro seu rancho!" 
              className="mx-auto max-w-4xl w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Sua propriedade rural merece o melhor cuidado!
              </h3>
              <p className="text-green-100 text-lg max-w-2xl mx-auto mb-6">
                Oferecemos soluções completas para manter seu rancho, sítio ou chácara sempre em perfeitas condições.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-3"
                onClick={() => window.open('https://wa.me/5517992174138', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale Conosco Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Sobre a Rancho & Cia</h2>
              <p className="text-lg text-gray-700 mb-6">
                Somos uma empresa especializada em oferecer soluções completas para propriedades rurais, ranchos e sítios. 
                Com anos de experiência no mercado, nos tornamos referência em qualidade e confiabilidade na região de 
                Santa Fé do Sul, Jales e região - SP.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nossa missão é proporcionar tranquilidade e comodidade aos nossos clientes, oferecendo desde serviços 
                básicos de manutenção até soluções completas de segurança e lazer.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">500+</div>
                  <div className="text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">8</div>
                  <div className="text-gray-600">Tipos de Serviços</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={logoVerde} 
                alt="Rancho & Cia" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de quem confia na Rancho & Cia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="border-green-200">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{depoimento.nome}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{depoimento.servico}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{depoimento.comentario}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">Solicite seu orçamento ou tire suas dúvidas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Solicitar Orçamento</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="nome"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="telefone"
                      placeholder="Seu telefone/WhatsApp"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="servico"
                      value={formData.servico}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Selecione o serviço</option>
                      {servicos.map(servico => (
                        <option key={servico.id} value={servico.titulo}>{servico.titulo}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Textarea
                      name="mensagem"
                      placeholder="Descreva o que você precisa..."
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-700" />
                    <div>
                      <p className="font-semibold">(17) 99217-4138</p>
                      <p className="text-sm text-gray-600">WhatsApp e Ligações</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <div>
                      <p className="font-semibold">Santa Fé do Sul, Jales e região - SP</p>
                      <p className="text-sm text-gray-600">Atendemos toda a região</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-700" />
                    <div>
                      <p className="font-semibold">Segunda a Sábado</p>
                      <p className="text-sm text-gray-600">8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Atendimento Rápido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Para atendimento imediato, entre em contato pelo WhatsApp. 
                    Respondemos rapidamente e podemos agendar uma visita no mesmo dia!
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/5517992174138', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoBranco} alt="Rancho & Cia" className="h-12 w-auto" />
                <div>
                  <h3 className="text-xl font-bold">Rancho & Cia</h3>
                  <p className="text-green-200">Tudo pro seu rancho!</p>
                </div>
              </div>
              <p className="text-green-200">
                O maior hub de serviços e soluções para propriedades rurais em Santa Fé do Sul, Jales e região - SP.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-green-200">
                {servicos.slice(0, 4).map(servico => (
                  <li key={servico.id}>{servico.titulo}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-green-200">
                <p>(17) 99217-4138</p>
                <p>Santa Fé do Sul, Jales e região - SP</p>
                <p>Segunda a Sábado: 8h às 18h</p>
              </div>
            </div>
          </div>
          
          {/* Seção de Marcas */}
          <div className="border-t border-green-700 mt-8 pt-8">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-2">Marcas que Trabalhamos</h4>
              <p className="text-green-200 text-sm">Produtos de qualidade das melhores marcas do mercado</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
              {/* Marcas de Materiais Elétricos */}
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Schneider</div>
                <div className="text-green-200 text-xs">Elétrica</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Tramontina</div>
                <div className="text-green-200 text-xs">Ferramentas</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Tigre</div>
                <div className="text-green-200 text-xs">Hidráulica</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Cobrecom</div>
                <div className="text-green-200 text-xs">Fios e Cabos</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Intelbras</div>
                <div className="text-green-200 text-xs">Segurança</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">Philips</div>
                <div className="text-green-200 text-xs">Iluminação</div>
              </div>
            </div>
            
            <div className="text-center text-xs text-green-300">
              <p>* Trabalhamos com produtos originais dessas e outras marcas reconhecidas no mercado.</p>
              <p>As marcas citadas são de propriedade de seus respectivos fabricantes.</p>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-6 pt-6 text-center text-green-200">
            <p>&copy; 2024 Rancho & Cia. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 text-green-300">
              Desenvolvido com tecnologia e inovação para melhor atendê-lo.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
          onClick={() => window.open('https://wa.me/5517992174138', '_blank')}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default App;
