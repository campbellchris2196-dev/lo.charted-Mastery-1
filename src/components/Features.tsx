import { BookOpen, Users, Target, Zap, Shield, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "80+ HD Video Lessons",
    description: "In-depth modules on chart patterns, indicators, and execution strategies"
  },
  {
    icon: Users,
    title: "lo.charted Discord",
    description: "Exclusive community with daily trade setups, alerts, and mentorship"
  },
  {
    icon: Target,
    title: "Live Charting Sessions",
    description: "Watch real-time analysis and learn to read charts like a pro"
  },
  {
    icon: Zap,
    title: "Scalping & Swing Setups",
    description: "Master both short-term scalps and swing trades for maximum flexibility"
  },
  {
    icon: Shield,
    title: "Risk Management System",
    description: "Our proprietary R-multiple system to protect and grow your account"
  },
  {
    icon: Award,
    title: "lo.charted Certification",
    description: "Earn your badge as a certified lo.charted trader"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The lo.charted <span className="text-primary">System</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete trading education designed to take you from beginner to consistently profitable in the shortest time possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:glow-gold group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
