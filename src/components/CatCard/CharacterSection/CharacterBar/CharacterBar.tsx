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
    <>
      <p
        style={{
          fontSize: 'small',
          margin: 0,
          color: 'var(--secondary)',
        }}
      >
        {name}
      </p>
      <ProgressBar
        now={level * 20}
        variant={levelColor[level - 1]}
        className="mb-1"
      />
    </>
  )
}
