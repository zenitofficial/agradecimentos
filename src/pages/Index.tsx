import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Sua Loja</h1>
        <p className="text-xl text-muted-foreground">Simulação de checkout</p>
        <Button onClick={() => navigate("/thank-you")} size="lg">
          Ver página de agradecimento
        </Button>
      </div>
    </div>
  );
};

export default Index;
