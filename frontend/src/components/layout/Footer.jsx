// Using generic lucide-react icons instead of brand icons which were removed
import { MessageCircle as TwitterIcon, Camera as InstagramIcon, Globe as LinkedinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t-4 border-dark-border bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-6xl md:text-[8vw] leading-[0.8] tracking-tighter font-heading font-extrabold text-white">
              MINDCARE.
            </h2>
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white text-foreground rounded-full border-2 border-transparent hover:border-accent flex items-center justify-center transition-colors"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-foreground rounded-full border-2 border-transparent hover:border-secondary flex items-center justify-center transition-colors"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white text-foreground rounded-full border-2 border-transparent hover:border-tertiary flex items-center justify-center transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:text-right">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-heading font-bold text-lg">
              <a href="#" className="hover:text-accent transition-colors underline-offset-4 hover:underline">
                About
              </a>
              <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">
                Contact
              </a>
              <a href="#" className="hover:text-tertiary transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </a>
            </div>
            <p className="text-sm font-medium text-muted-foreground">© 2026 MindCare. Playing it safe.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
