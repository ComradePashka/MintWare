'use client';

//import JupiterTerminalWidget from '../jupiter/terminal';
import { AppHero } from '../ui/ui-layout';

import dynamic from 'next/dynamic'
 
const JupiterTerminalWidget = dynamic(
  () => import('../jupiter/terminal'),
  { ssr: false }
)

export default function DashboardFeature() {

  //      <div id='integrated-terminal'/>
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to MintWare Swap" />
      <JupiterTerminalWidget />
    </div>
  );
}
