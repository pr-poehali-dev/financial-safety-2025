
import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-semibold">ФинЗащита-2025</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              Информационный ресурс о современных угрозах финансовой безопасности и способах защиты от них.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Icon name="Facebook" className="text-muted-foreground hover:text-primary transition-colors" size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Icon name="Twitter" className="text-muted-foreground hover:text-primary transition-colors" size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Icon name="Instagram" className="text-muted-foreground hover:text-primary transition-colors" size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Icon name="Youtube" className="text-muted-foreground hover:text-primary transition-colors" size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ФинЗащита-2025. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
