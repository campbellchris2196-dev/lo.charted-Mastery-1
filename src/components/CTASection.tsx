import { ArrowRight, CheckCircle, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="enroll" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-primary">lo.charted</span> Journey
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 15,000+ traders who've mastered the charts. Your path to consistent profits starts here.
          </p>
          
          {/* Pricing card */}
          <div className="glass-card rounded-2xl p-8 md:p-12 mb-8 max-w-xl mx-auto glow-gold">
            <div className="mb-6">
              <span className="text-muted-foreground line-through text-2xl">$1,197</span>
              <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-bold text-primary">$597</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
              <p className="text-success mt-2 font-medium">Save $600 - Early Access Pricing</p>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              {[
                "80+ HD Video Lessons",
                "Lifetime Access + Updates",
                "lo.charted Discord Community",
                "Live Charting Sessions Weekly",
                "lo.charted Trader Certification",
                "30-Day Money Back Guarantee"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground group">
              Join lo.charted Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              🔒 Secure checkout • Instant access • Cancel anytime
            </p>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>15,000+ Traders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
