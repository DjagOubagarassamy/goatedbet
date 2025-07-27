import React, { useState } from 'react';
import { Star, Check, Users, TrendingUp, Shield, PlayCircle, ChevronDown, Menu, X, DollarSign, Target, BookOpen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const testimonials = [
    {
      name: "@hugofoot8071427",
      profit: "3 823 €",
      text: "Ce guide a changé totalement mon approche avec les paris sportifs.",
      rating: 5
    },
    {
      name: "@stanfiledx_",
      profit: "1 320 €",
      text: "Les stratégies enseignées ici sont de l'or pur. Je suis rentable depuis 2 mois en utilisant ces techniques.",
      rating: 5
    },
    {
      name: "@rodriguesdavx1",
      profit: "5 230 €",
      text: "J'étais sceptique au début, mais les résultats parlent d'eux-mêmes. C'est le cours le plus complet que j'ai jamais suivi.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Ce cours convient-il aux débutants ?",
      answer: "Absolument ! Le cours commence par les bases et progresse vers des stratégies avancées. Nous couvrons tout, du vocabulaire de base aux systèmes de paris sophistiqués. Il est donc adapté à tout les profils."
    },
    {
      question: "Combien de temps ai-je accès au cours ?",
      answer: "Vous avez un accès à vie à tous les supports du cours, y compris les futures mises à jour. Une fois acheté, le contenu est à vous pour toujours. Interdiction en revanche de le partager publiquement, le contenu étant sous licence"
    },
    {
      question: "Quelle est votre politique de remboursement ?",
      answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas entièrement satisfait du cours, nous vous remboursons intégralement, sous conditions."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Images de performances (remplace les URLs par tes vraies images)
  const authorImages = [
    {
      src: 'image.png',
      alt: 'Performance 1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-green-400" />
      <span className="text-xl font-bold">GoatedBet Shop</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('course')} className="hover:text-green-400 transition-colors">Programme</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-green-400 transition-colors">Avis</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-green-400 transition-colors">Tarifs</button>
              <button onClick={() => scrollToSection('author')} className="hover:text-green-400 transition-colors">Auteur</button>
              <button onClick={() => scrollToSection('pricing')} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition-colors">
                Commencer
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('course')} className="text-left hover:text-green-400 transition-colors">Programme</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-green-400 transition-colors">Avis</button>
                <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-green-400 transition-colors">Tarifs</button>
                <button onClick={() => scrollToSection('author')} className="text-left hover:text-green-400 transition-colors">Auteur</button>
                <button onClick={() => scrollToSection('pricing')} className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                  Commencer
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Plus de 103 étudiants déjà rentables
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformez les paris sportifs en
            <span className="text-green-400"> machine à profits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Maîtrisez les stratégies éprouvées des parieurs professionnels pour générer des profits réguliers.
            Arrêtez de jouer et commencez à investir avec une formation complète sur les paris sportifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Commencez à gagner dès aujourd'hui
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center text-gray-300 hover:text-white px-8 py-4 transition-colors">
              <PlayCircle className="w-6 h-6 mr-2" />
              Voir un aperçu gratuit
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
              <div className="text-gray-400">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">400 €</div>
              <div className="text-gray-400">de profits en plus en moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">103</div>
              <div className="text-gray-400">Étudiants actifs</div>
            </div>
          </div>
        </div>
      </section>

          {/* Auteur */}
          <section id="author" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de l'auteur</h2>
                <div className="flex flex-col items-center justify-center mb-6">
                  {/* Bulle photo auteur */}
                  <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-green-400 shadow-lg flex items-center justify-center mb-4 overflow-hidden">
                    <img src="author.png" alt="Photo de l'auteur" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xl text-gray-300">Je suis David.V, 22 ans. Parieur proffesionnel et investisseur depuis 2 ans. <br /> J'étais un étudiant fauché, il y a encore 2 ans et aujourd'hui je peux subvenir à mes besoins et ceux de ma famille à partir des paris sportifs. <br />Et je crois sincèrement qu'il est possible pour tout le monde d'y parvenir. 
                    <br />Ci-dessous, quelques preuves de mes performances récentes :</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-8">
                {authorImages.map((img, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-lg">N'hésitez pas à me contacter pour toute question ou pour voir plus de résultats !</p>
              </div>
            </div>
          </section>
      {/* Course Content */}
      <section id="course" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ce que vous allez maîtriser</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour passer de parieur perdant à investisseur sportif rentable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Stratégies de betting",
                description: "Apprenez à repérer et exploiter les value bets qui vous donnent un avantage mathématique sur les bookmakers."
              },
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Gestion de bankroll",
                description: "Maîtrisez les techniques de gestion de l'argent pour protéger et faire croître votre capital de paris."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Adapté à tout les profils",
                description: "Obtenez des conseils adapté à votre profil, votre fréquence de paris, votre capital de départ et le type d'investissement que vous souhaitez."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Gestion des risques",
                description: "Minimisez les pertes et maximisez les profits grâce à des stratégies de gestion des risques éprouvées."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Obtenir les meilleures côtes",
                description: "Comprenez les marchés des paris, les mouvements de cotes et comment placer vos paris au bon moment et sur les bonnes plateformes."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Psychologie & discipline",
                description: "Développez la force mentale nécessaire pour réussir sur le long terme dans les paris."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all group">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Histoires de réussite</h2>
            <p className="text-xl text-gray-300">Des résultats concrets de vrais étudiants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-green-400 font-bold">Profit: {testimonial.profit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer à gagner ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ne perdez pas un jour de plus pour transformer vos paris en stratégie d'investissement rentable.
          </p>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Commencer aujourd'hui
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commencez votre parcours rentable</h2>
            <p className="text-xl text-gray-300">Devenez un parieur gagnant</p>
          </div>

          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl border-2 border-green-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                LE PLUS POPULAIRE
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Maîtrise complète des paris sportifs</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-green-400">43 €</span>
                <span className="text-gray-400 line-through ml-2 text-2xl">95 €</span>
              </div>
              <p className="text-gray-300 mb-8">Offre limitée - 55% de réduction sur le prix habituel</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Guide complet",
                "Accès à vie et mises à jour",
                "Accès aux meilleures plateformes de paris",
                "50€ de paris gratuit offert",
                "Ressources et outils téléchargeables",
                "Support par email",
                "Garantie satisfait ou remboursé 30 jours"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://buy.stripe.com/7sY5kEbIJd5L5RTgjn7Zu00"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg mb-4 flex items-center justify-center"
            >
              Accédez immédiatement
            </a>

            <p className="text-center text-sm text-gray-400">
              🔒 Paiement sécurisé • Garantie 30 jours • Accès immédiat
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-yellow-400 font-semibold">⚡ Il ne reste que 9 places à ce tarif !</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border border-gray-700">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">GoatedBet Shop</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transformez vos paris sportifs en profits réguliers
          </p>
          <p className="text-sm text-gray-500">
            © 2025 ProBet Académie. Tous droits réservés. | Politique de confidentialité | Conditions d'utilisation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;