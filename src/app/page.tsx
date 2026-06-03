import { Hero } from '@/components/Hero';
import { ProjectOverview } from '@/components/ProjectOverview';
import { GeologicalStory } from '@/components/GeologicalStory';
import { FieldEvidence } from '@/components/FieldEvidence';
import { Interpretation } from '@/components/Interpretation';
import { KeyInsights } from '@/components/KeyInsights';
import { Reflection } from '@/components/Reflection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProjectOverview />
      <GeologicalStory />
      <FieldEvidence />
      <Interpretation />
      <KeyInsights />
      <Reflection />
    </div>
  );
}
