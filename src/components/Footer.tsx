import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-6">
        <p className="flex items-center justify-center gap-2">
          Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Tamiris Ribeiro
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
