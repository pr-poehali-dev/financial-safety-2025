
import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className={`p-2 rounded-full bg-accent ${iconColor}`}>
          <Icon name={icon} size={24} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Icon name="CheckCircle" className="text-primary mr-2 shrink-0 mt-1" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
