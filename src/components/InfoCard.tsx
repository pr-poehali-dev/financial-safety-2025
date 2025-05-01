
import React from "react";
import Icon from "@/components/ui/icon";

interface InfoCardProps {
  icon: string;
  title: string;
  items: string[];
  iconColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  icon, 
  title, 
  items,
  iconColor = "text-primary" 
}) => {
  return (
    <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50 h-full">
      <div className="flex items-center mb-6">
        <div className={`p-2 rounded-full ${iconColor.replace('text-', 'bg-')}/10 mr-4`}>
          <Icon name={icon} className={`${iconColor}`} size={24} />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
              <Icon name="Check" className="text-primary" size={14} />
            </span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
