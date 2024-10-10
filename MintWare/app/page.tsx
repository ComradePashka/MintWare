import ProjectList from '@/components/project/project-list'
import dynamic from 'next/dynamic'
 
const JupiterTerminalWidget = dynamic(
  () => import('@/components/jupiter/terminal'),
  { ssr: false }
)

export default function Page() {
  return <div>
    <ProjectList />
    <JupiterTerminalWidget />
  </div>

}
