import { useState } from "react";
import { 
  Trophy, 
  Play, 
  Smartphone, 
  Shield, 
  Clock, 
  Zap, 
  CheckCircle, 
  Star,
  Gift,
  Coins,
  Crown,
  Calendar,
  Headphones,
  Tag,
  Lock,
  CreditCard,
  Users,
  UserPlus,
  QrCode,
  ChevronDown,
  MessageCircle,
  Rocket
} from "lucide-react";

// Simple utility function
function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Simple Button Component
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary";
}

function Button({ children, className = "", onClick, variant = "default" }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-semibold transition duration-300 cursor-pointer inline-flex items-center justify-center";
  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    outline: "border-2 border-white text-white hover:bg-white hover:text-green-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  
  return (
    <button 
      className={cn(baseClasses, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Simple Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md", className)}>
      {children}
    </div>
  );
}

// Utility functions
function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openExternalLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openWhatsApp(message: string = "Hi, I need help with Sportway.lk") {
  const whatsappUrl = `https://wa.me/94112345678?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// FAQ Component
function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "Is this legal in Sri Lanka?",
      answer: "Yes, Sportway.lk is completely legal and licensed to operate in Sri Lanka. We are regulated by the relevant authorities and follow all local gaming laws and regulations."
    },
    {
      question: "How do I withdraw my winnings?",
      answer: "Withdrawing is simple! You can withdraw through bank transfers, mobile banking, and digital wallets. Most withdrawals are processed within 30 minutes during business hours."
    },
    {
      question: "How do I deposit money?",
      answer: "We accept bank transfers, debit/credit cards, eZ Cash, mCash, and other popular payment methods in Sri Lanka. Deposits are instant for most payment methods."
    },
    {
      question: "What games can I play?",
      answer: "We offer sports betting (cricket, football, tennis), casino games (slots, roulette, blackjack, poker), virtual sports, and live dealer games."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely! We use bank-level SSL encryption to protect all your personal and financial information. We never share your data with third parties."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition duration-300"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                <ChevronDown 
                  className={cn(
                    "text-gray-400 transform transition-transform duration-300",
                    openItems.includes(index) && "rotate-180"
                  )}
                />
              </button>
              {openItems.includes(index) && (
                <div className="p-6 pt-0 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button 
            className="bg-green-600 text-white px-6 py-3"
            onClick={() => openWhatsApp()}
          >
            <MessageCircle className="mr-2" size={20} />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const games = [
    {
      name: "Cricket Betting",
      description: "Bet on live cricket matches with real-time odds and instant payouts.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Casino Slots",
      description: "Spin the reels and hit the jackpot with our exciting slot machines.",
      image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Virtual Sports",
      description: "24/7 virtual matches with realistic graphics and instant results.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Live Poker",
      description: "Join live poker tables with real dealers and players worldwide.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Live Roulette",
      description: "Experience the classic casino thrill with live roulette tables.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Blackjack",
      description: "Beat the dealer in this classic card game with perfect strategy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const testimonials = [
    {
      name: "Kamal Perera",
      amount: "Rs. 125,000",
      comment: "I couldn't believe it when I won! Sportway.lk changed my life. Fast withdrawal and amazing support!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sanduni Silva",
      amount: "Rs. 78,500",
      comment: "Best gaming platform in Sri Lanka! I've been playing for 6 months and won multiple times. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Ashen Fernando",
      amount: "Rs. 250,000",
      comment: "Jackpot win on cricket betting! Professional platform with instant payouts. Thank you Sportway!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Trophy className="text-green-600 text-3xl" />
            <span className="text-2xl font-bold text-gray-800">Sportway.lk</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('games')} className="text-gray-700 hover:text-green-600 font-medium">Games</button>
            <button onClick={() => scrollToSection('promotions')} className="text-gray-700 hover:text-green-600 font-medium">Promotions</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-green-600 font-medium">How It Works</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-green-600 font-medium">FAQ</button>
          </nav>
          <Button 
            className="bg-green-600 text-white px-6 py-2"
            onClick={() => openExternalLink('https://sportway.lk')}
          >
            Play Now
          </Button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Play & Win Real Cash<br />
            <span className="text-yellow-400">Every Day!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Sri Lanka's most trusted legal gaming platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="gradient-accent text-gray-800 px-8 py-4 text-lg font-bold hover:opacity-90"
              onClick={() => openExternalLink('https://sportway.lk')}
            >
              <Play className="mr-2" />Start Playing Now
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('app-download')}
            >
              <Smartphone className="mr-2" />Download App
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm opacity-80 flex-wrap gap-4">
            <div className="flex items-center">
              <Shield className="mr-2" />100% Legal
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" />24/7 Support
            </div>
            <div className="flex items-center">
              <Zap className="mr-2" />Instant Withdrawals
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Experience the Thrill
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <Play className="text-6xl text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold">Platform Overview</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">How Sportway Works</h3>
                <p className="text-gray-600">Discover how easy it is to start playing and winning on Sri Lanka's premier gaming platform.</p>
              </div>
            </Card>
            <Card className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-green-600 flex items-center justify-center">
                <div className="text-center">
                  <Play className="text-6xl text-white mb-4 mx-auto" />
                  <p className="text-white font-semibold">Winner Stories</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Real Winners, Real Stories</h3>
                <p className="text-gray-600">Hear from our verified winners who have changed their lives with Sportway.lk</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trending Games */}
      <section id="games" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Our Most Trending Games
          </h2>
          <p className="text-center text-gray-600 mb-12">Choose from our exciting collection of games and start winning today!</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <Button 
                    className="bg-green-600 text-white w-full"
                    onClick={() => openExternalLink('https://sportway.lk')}
                  >
                    Play Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions & Bonuses */}
      <section id="promotions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Promotions & Bonuses
          </h2>
          <p className="text-center text-gray-600 mb-12">Maximize your winnings with our exclusive offers!</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Welcome Bonus</h3>
                  <p className="text-lg mb-4">Get 100% match on your first deposit</p>
                  <p className="text-3xl font-bold">Up to Rs. 50,000</p>
                  <Button className="bg-gray-800 text-white mt-4 hover:bg-gray-700">
                    Claim Now
                  </Button>
                </div>
                <Gift className="text-6xl opacity-20" />
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-pink-600 to-yellow-600 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Daily Cashback</h3>
                  <p className="text-lg mb-4">Get money back on every bet</p>
                  <p className="text-3xl font-bold">5% Cashback</p>
                  <Button variant="secondary" className="mt-4">
                    Learn More
                  </Button>
                </div>
                <Coins className="text-6xl opacity-20" />
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">VIP Program</h3>
                  <p className="text-lg mb-4">Exclusive rewards for loyal players</p>
                  <p className="text-3xl font-bold">Join Elite</p>
                  <Button variant="secondary" className="mt-4">
                    Apply Now
                  </Button>
                </div>
                <Crown className="text-6xl opacity-20" />
              </div>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600 to-green-600 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Weekend Special</h3>
                  <p className="text-lg mb-4">Double your winnings</p>
                  <p className="text-3xl font-bold">2x Multiplier</p>
                  <Button variant="secondary" className="mt-4">
                    Play Now
                  </Button>
                </div>
                <Calendar className="text-6xl opacity-20" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Sportway.lk?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Secure & Legal</h3>
              <p className="text-gray-600">Licensed and regulated platform with top-level security</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Withdrawals</h3>
              <p className="text-gray-600">Get your winnings in minutes, not days</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile-Friendly</h3>
              <p className="text-gray-600">Play anywhere, anytime on any device</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Winners</h3>
              <p className="text-gray-600">Transparent and verified payout system</p>
            </div>
          </div>

          {/* Trust elements */}
          <div className="mt-12 flex justify-center items-center space-x-8 flex-wrap gap-4">
            <Card className="p-4 flex items-center space-x-2">
              <Lock className="text-green-600 text-xl" />
              <span className="font-semibold">SSL Secured</span>
            </Card>
            <Card className="p-4 flex items-center space-x-2">
              <Tag className="text-yellow-500 text-xl" />
              <span className="font-semibold">Licensed</span>
            </Card>
            <Card className="p-4 flex items-center space-x-2">
              <CreditCard className="text-blue-600 text-xl" />
              <span className="font-semibold">Secure Payments</span>
            </Card>
            <Card className="p-4 flex items-center space-x-2">
              <Users className="text-green-600 text-xl" />
              <span className="font-semibold">Trusted by 50K+</span>
            </Card>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Real Winners, Real Stories
          </h2>
          <p className="text-center text-gray-600 mb-12">See how our verified winners are earning with Sportway.lk</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
                <p className="text-yellow-600 font-bold text-xl mb-2">Won {testimonial.amount}</p>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <div className="flex justify-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Video testimonials */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Winner Video Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-green-600 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="text-6xl text-white mb-4 mx-auto" />
                    <p className="text-white font-semibold">Winner Interview</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Priyanka's Rs. 180,000 Win Story</h4>
                  <p className="text-gray-600 text-sm">How she won big with cricket betting</p>
                </div>
              </Card>
              <Card className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                 <div className="aspect-video bg-green-600 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="text-6xl text-white mb-4 mx-auto" />
                    <p className="text-white font-semibold">Jackpot Winner</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">Chaminda's Slot Jackpot</h4>
                  <p className="text-gray-600 text-sm">Rs. 350,000 jackpot win experience</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            How It Works - Easy 3 Steps
          </h2>
          <p className="text-center text-gray-600 mb-12">Start playing and winning in just 3 simple steps</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <UserPlus className="text-white text-3xl" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
              <p className="text-gray-600 mb-4">Create your free account in under 2 minutes with just your mobile number and email.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quick mobile verification</li>
                <li>• Secure account setup</li>
                <li>• Instant activation</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <CreditCard className="text-white text-3xl" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Deposit or Claim Free Bonus</h3>
              <p className="text-gray-600 mb-4">Fund your account or claim your welcome bonus to start playing immediately.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multiple payment options</li>
                <li>• Instant deposits</li>
                <li>• Free bonus available</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Trophy className="text-white text-3xl" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Playing & Win</h3>
              <p className="text-gray-600 mb-4">Choose your favorite games and start winning real cash prizes today!</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Instant gameplay</li>
                <li>• Real money prizes</li>
                <li>• Fast withdrawals</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-green-600 text-white px-8 py-4 text-lg font-bold"
              onClick={() => openExternalLink('https://sportway.lk')}
            >
              <Rocket className="mr-2" />Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section id="app-download" className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="gradient-gaming rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-xl mb-8 opacity-90">Play anywhere, anytime with our mobile app</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-white p-4 rounded-lg">
                <QrCode className="text-gray-800 mx-auto mb-2" size={120} />
                <p className="text-gray-800 font-semibold">Scan to Download APK</p>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2" size={20} />Live betting on the go</li>
                  <li className="flex items-center"><CheckCircle className="mr-2" size={20} />Instant notifications</li>
                  <li className="flex items-center"><CheckCircle className="mr-2" size={20} />Quick deposits & withdrawals</li>
                  <li className="flex items-center"><CheckCircle className="mr-2" size={20} />24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="text-green-500 text-2xl" />
                <span className="text-xl font-bold">Sportway.lk</span>
              </div>
              <p className="text-gray-400 mb-4">Sri Lanka's most trusted legal gaming platform</p>
              <Button 
                className="bg-green-600 text-white"
                onClick={() => openExternalLink('https://sportway.lk')}
              >
                Sign Up Now
              </Button>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Responsible Gaming</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MessageCircle className="mr-2" size={16} />
                  <button onClick={() => openWhatsApp()} className="hover:text-white">WhatsApp Support</button>
                </li>
                <li className="flex items-center">
                  <Headphones className="mr-2" size={16} />
                  <span>24/7 Live Chat</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Payment Methods</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <CreditCard size={20} />
                </div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <span className="text-xs">eZ Cash</span>
                </div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <span className="text-xs">mCash</span>
                </div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <span className="text-xs">Bank</span>
                </div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <span className="text-xs">Visa</span>
                </div>
                <div className="bg-gray-700 p-2 rounded flex items-center justify-center">
                  <span className="text-xs">Master</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sportway.lk. All rights reserved. Licensed and regulated gaming platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}