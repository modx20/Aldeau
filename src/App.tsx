import { useCallback, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { BranchesSection } from './components/BranchesSection';
import { CatalogSection } from './components/CatalogSection';
import { ContactSection } from './components/ContactSection';
import { CraftSection } from './components/CraftSection';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeBand } from './components/MarqueeBand';
import { OffersSection } from './components/OffersSection';
import { ProtoBar } from './components/ProtoBar';
import { ReviewsSection } from './components/ReviewsSection';
import { BRANCHES } from './data/aldiaaData';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(
    () => new Set()
  );
  const [activeBranchId, setActiveBranchId] = useState(BRANCHES[0].id);
  const [composerBranchId, setComposerBranchId] = useState('');

  useScrollReveal();

  const toggleProduct = useCallback((productId: string) => {
    setSelectedProducts((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  }, []);

  const handleSelectBranch = useCallback((branchId: string) => {
    setActiveBranchId(branchId);
    setComposerBranchId(branchId);
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ProtoBar />
      <Header />
      <main>
        <HeroSection />
        <MarqueeBand />
        <AboutSection />
        <CatalogSection selected={selectedProducts} onToggle={toggleProduct} />
        <CraftSection />
        <OffersSection />
        <BranchesSection
          activeBranchId={activeBranchId}
          onSelectBranch={handleSelectBranch}
        />
        <ReviewsSection />
        <ContactSection
          selected={selectedProducts}
          onToggle={toggleProduct}
          branchId={composerBranchId}
          onBranchChange={setComposerBranchId}
        />
      </main>
      <Footer />
      <FloatingControls count={selectedProducts.size} />
    </>
  );
}
