'use client';

import ProjectList from '../project/project-list';
import dynamic from 'next/dynamic'
 
const JupiterTerminalWidget = dynamic(
  () => import('../jupiter/terminal'),
  { ssr: false }
)

export default function DashboardFeature() {
  return (
    <div>
      <b>MintWare Swap</b>
      <ProjectList />
      <JupiterTerminalWidget />
    </div>
  );
}
