
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Актуальные проблемы личной <span className="text-primary">финансовой безопасности</span> в 2025 году
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              В современном мире финансовая безопасность — это не роскошь, а необходимость. 
              Узнайте об актуальных угрозах и эффективных способах защиты своих средств.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Начать изучение
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button size="lg" variant="outline">
                Скачать памятку
                <Icon name="Download" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto animate-slide-in">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Финансовая безопасность" 
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Icon name="ShieldCheck" className="text-success mr-2" size={20} />
                <span className="text-sm font-medium">Защитите свои финансы прямо сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
