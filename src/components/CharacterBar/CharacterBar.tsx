import { ProgressBar } from 'react-bootstrap'

interface ICharacterBarProps {
  name: string
  level: number
}

const levelColor = ['danger', 'warning', 'secondary', 'info', 'success']

export default function CharacterBar({
  name,
  level,
}: Readonly<ICharacterBarProps>) {
  return (
    <ProgressBar
      now={level * 20}
      label={name}
      variant={levelColor[level - 1]}
      className="mb-1"
    />
  )
}
