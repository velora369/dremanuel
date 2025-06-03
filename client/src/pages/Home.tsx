import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SimpleStartSection from '@/components/SimpleStartSection';
import OnlineInPersonSection from '@/components/OnlineInPersonSection';
import CompleteCareSection from '@/components/CompleteCareSection';
import AboutDoctorSection from '@/components/AboutDoctorSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import TechnologySection from '@/components/TechnologySection';
import CourseSection from '@/components/CourseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MediaCoverageSection from '@/components/MediaCoverageSection';
import PodcastsSection from '@/components/PodcastsSection';
import FinalCTASection from '@/components/FinalCTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = 'Dr. Emanuel Esposito - Médico Nefrologista';
  }, []);

  const handlePageUpdate = async () => {
    setIsRefreshing(true);
    
    // Simulate page content refresh
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setLastUpdated(new Date());
      
      toast({
        title: "Página atualizada",
        description: "O conteúdo foi atualizado com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro na atualização",
        description: "Não foi possível atualizar a página. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Update Button - Fixed position */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={handlePageUpdate}
          disabled={isRefreshing}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Atualizando...' : 'Atualizar'}
        </Button>
      </div>

      {/* Last updated info */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-2 text-xs text-muted-foreground">
          Última atualização: {lastUpdated.toLocaleTimeString('pt-BR')}
        </div>
      </div>

      <main key={lastUpdated.getTime()}>
        <HeroSection />
        <ExperienceSection />
        <SimpleStartSection />
        <OnlineInPersonSection />
        <CompleteCareSection />
        <AboutDoctorSection />
        <SpecialtiesSection />
        <TechnologySection />
        <CourseSection />
        <TestimonialsSection />
        <MediaCoverageSection />
        <PodcastsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
