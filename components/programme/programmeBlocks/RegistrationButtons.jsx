import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default  function RegistrationButtons() {
  function handleRegister() {
    window.location.href = '/inscription';
  }

  function handleDownloadPDF() {
    window.open('/programme.pdf', '_blank');
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        onClick={handleRegister}
      >
        S'inscrire maintenant
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={handleDownloadPDF}
      >
        <Download className="w-4 h-4 mr-2" />
        Programme PDF
      </Button>
    </div>
  );
}