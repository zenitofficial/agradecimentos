import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Logo placeholder */}
        <div className="text-center mb-8">
          <div className="inline-block text-2xl font-bold text-foreground">
            Sua Logo
          </div>
        </div>

        {/* Main Card */}
        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
          <div className="p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-success/20 rounded-full blur-xl animate-pulse"></div>
                <CheckCircle2 
                  className="w-20 h-20 text-success relative animate-check-bounce" 
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Main Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Obrigado pela sua compra!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              Sua confiança significa muito pra nós.
            </p>

            {/* Secondary Message */}
            <div className="bg-success-light rounded-lg p-6 mb-8 animate-scale-in">
              <p className="text-foreground/80 leading-relaxed">
                Estamos preparando tudo com cuidado e te avisaremos por e-mail quando estiver pronto.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => navigate("/")}
              size="lg"
              className="min-w-[200px] shadow-lg hover:shadow-xl transition-all"
            >
              Voltar ao site
            </Button>
          </div>
        </Card>

        {/* Placeholder Section for Future Upsells */}
        <div className="mt-8 text-center">
          <Card className="border-dashed border-2 border-muted bg-transparent">
            <div className="p-8 text-muted-foreground">
              <p className="text-sm">
                Espaço reservado para recomendações e novidades
              </p>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Dúvidas? Entre em contato conosco a qualquer momento.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
