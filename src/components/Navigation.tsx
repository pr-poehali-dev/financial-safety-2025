
import React from "react";
import Icon from "@/components/ui/icon";

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-semibold">ФинЗащита-2025</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a 
                href="#threats" 
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Угрозы
              </a>
              <a 
                href="#mistakes" 
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Ошибки
              </a>
              <a 
                href="#recommendations" 
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Рекомендации
              </a>
            </div>
          </div>
          
          <div className="flex items-center md:hidden">
            <button className="text-foreground p-2 rounded-md hover:bg-muted transition-colors">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
