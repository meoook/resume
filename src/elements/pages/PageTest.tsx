import Background from '../components/bg'

interface PageTestProps {
  children?: React.ReactNode
}
export default function PageTest(props: PageTestProps) {
  return (
    <div>
      <Background />
    </div>
  )
}
