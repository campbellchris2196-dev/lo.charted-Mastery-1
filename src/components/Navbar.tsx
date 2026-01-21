import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <TrendingUp className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold tracking-tight">
            lo.<span className="text-primary">charted</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
            System
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
            Traders
          </a>
          <a href="#social" className="text-muted-foreground hover:text-primary transition-colors">
            Community
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#enroll">Join Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              System
            </a>
            <a 
              href="#testimonials" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Traders
            </a>
            <a 
              href="#social" 
              className="text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <a href="#enroll" onClick={() => setMobileMenuOpen(false)}>Join Now</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
