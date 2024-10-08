'use client';

import ProjectList from '../project/project-list';
import dynamic from 'next/dynamic'
import { DevWrapper } from '../utils/DevWrapper';
 
const JupiterTerminalWidget = dynamic(
  () => import('../jupiter/terminal'),
  { ssr: false }
)

export default function DashboardFeature() {
  return (
    <div>
      <b>MintWare Swap</b>
      <DevWrapper>Test Message for Developers!</DevWrapper>
      <ProjectList />
      <JupiterTerminalWidget />
    </div>
  );
}
