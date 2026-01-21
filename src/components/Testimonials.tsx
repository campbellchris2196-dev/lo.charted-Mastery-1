import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    avatar: "AR",
    profit: "+$52,400",
    timeframe: "5 months",
    quote: "lo.charted taught me to read charts like never before. The pattern recognition module is insane."
  },
  {
    name: "Jessica Kim",
    avatar: "JK",
    profit: "+$31,200",
    timeframe: "4 months",
    quote: "The Discord community is so supportive. Daily chart breakdowns helped me develop my edge."
  },
  {
    name: "Michael Torres",
    avatar: "MT",
    profit: "+$124,800",
    timeframe: "1 year",
    quote: "From losing trader to full-time. lo.charted's risk management system saved my account and my confidence."
  },
  {
    name: "Amanda Chen",
    avatar: "AC",
    profit: "+$18,900",
    timeframe: "3 months",
    quote: "The scalping setups are pure gold. I'm making consistent daily profits now. Thank you lo.charted!"
  },
  {
    name: "Ryan Mitchell",
    avatar: "RM",
    profit: "+$203,000",
    timeframe: "2 years",
    quote: "This isn't just a course, it's a complete trading transformation. Best money I've ever spent."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            lo.charted <span className="text-primary">Traders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real profits from traders who learned to read the charts
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 glow-gold">
            <Quote className="h-12 w-12 text-primary/30 mb-6" />
            
            <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground text-sm">lo.charted Trader</div>
                </div>
              </div>
              
              <div className="text-center sm:text-right">
                <div className="text-3xl font-bold text-success">{testimonials[currentIndex].profit}</div>
                <div className="text-muted-foreground text-sm">in {testimonials[currentIndex].timeframe}</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
