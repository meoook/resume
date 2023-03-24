import style from './icon.module.scss'
import iconArray from './icons'

interface IcoLangProps {
  name: string
  short?: boolean
}

export default function IcoLang({ name, short }: IcoLangProps) {
  const langIcon = iconArray[name] || iconArray.world
  return (
    <div className={style.icon}>
      {langIcon}
      {short && <span>{name}</span>}
    </div>
  )
}
