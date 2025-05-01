
import React from "react";
import Icon from "@/components/ui/icon";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <Icon name="Shield" className="text-primary" size={22} />
              </div>
              <span className="font-semibold text-lg">ФинБезопасность</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#threats" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Угрозы
              </a>
              <a href="#mistakes" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Ошибки
              </a>
              <a href="#recommendations" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Рекомендации
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
