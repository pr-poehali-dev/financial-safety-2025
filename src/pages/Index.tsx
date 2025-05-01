
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";

const Index = () => {
  const threats = [
    "Мошенничество в интернете: фишинг, фальшивые сайты банков, ложные сообщения и звонки от \"службы безопасности\".",
    "Утечка данных: взлом аккаунтов, несанкционированный доступ к банковским приложениям.",
    "Социальная инженерия: манипуляции, направленные на получение ваших личных или банковских данных.",
    "Мошенничество с инвестициями и криптовалютой: ложные схемы \"быстрого обогащения\", пирамиды."
  ];

  const mistakes = [
    "Слабые или одинаковые пароли для разных сервисов.",
    "Переход по подозрительным ссылкам.",
    "Недостаточная проверка информации перед переводом средств.",
    "Доверие незнакомцам, представляющимся сотрудниками банков или других организаций.",
    "Отсутствие антивирусного ПО или обновлений на устройствах."
  ];

  const recommendations = [
    "Не разглашайте данные: Ни по телефону, ни в мессенджерах не передавайте PIN-коды, пароли, CVV-коды и коды из SMS.",
    "Используйте сложные пароли: Регулярно обновляйте их и используйте двухфакторную аутентификацию.",
    "Проверяйте источники: При получении сообщений или звонков от \"банка\" — перезвоните на официальный номер.",
    "Следите за активностью на счётах: Установите уведомления об операциях и проверяйте выписки.",
    "Будьте критичны: Не поддавайтесь на обещания быстрой прибыли и не переходите по неизвестным ссылкам."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        
        <Section id="threats" title="Современные угрозы личной финансовой безопасности">
          <div className="bg-danger/5 border border-danger/20 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="p-2 rounded-full bg-danger/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9V13M12 17H12.01M8.21 14.77C7.44296 16.0494 7.00261 17.513 7.00261 19.0051C7.00261 19.5503 7.44824 20 8.00261 20H16.0026C16.557 20 17.0026 19.5503 17.0026 19.0051C17.0026 17.513 16.5623 16.0494 15.7952 14.77L12 7L8.21 14.77Z" stroke="hsl(var(--danger))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">В современном мире финансовая безопасность — это не роскошь, а необходимость</h3>
                <p className="text-muted-foreground">Количество финансовых преступлений с каждым годом растет. Только за последний год более 30% россиян столкнулись с попытками мошенничества.</p>
              </div>
            </div>
          </div>
          
          <InfoCard 
            icon="Shield" 
            title="Основные угрозы сегодня" 
            items={threats} 
          />
        </Section>
        
        <Section id="mistakes" title="Типичные ошибки, ведущие к финансовым потерям">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Ошибки финансовой безопасности" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Многие становятся жертвами мошенников из-за:</h3>
              <InfoCard 
                icon="AlertTriangle" 
                title="Распространенные ошибки" 
                items={mistakes}
                iconColor="text-warning" 
              />
            </div>
          </div>
        </Section>
        
        <Section id="recommendations" title="Рекомендации по защите личных финансов">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <InfoCard 
                icon="ShieldCheck" 
                title="Чтобы защитить себя и свои средства" 
                items={recommendations}
                iconColor="text-success" 
              />
            </div>
            <div className="bg-accent rounded-xl p-6 flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Помните!</h3>
                <p className="text-muted-foreground">
                  Финансовая безопасность — это ваша ответственность. Будьте внимательны, осведомлённы и всегда проверяйте информацию!
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 12L14 7V10.5H3V13.5H14V17L19.5 12ZM21 19H3V21H21V19Z" fill="hsl(var(--primary))"/>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Поделитесь с близкими</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Расскажите о правилах финансовой безопасности своим родным и близким, особенно пожилым людям, которые часто становятся жертвами мошенников.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
