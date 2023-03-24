import { useState } from 'react'
import { useIntl } from 'react-intl'
import IcoLang from '../ico-lang'
import style from './select.module.scss'

interface SelectProps {
  onChange: (language: string) => void
}

export default function SelectLang({ onChange }: SelectProps) {
  const intl = useIntl()
  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState(intl.locale)

  const langList: string[] = ['en', 'ru']

  const handleSelect = (lang: string) => {
    setSelected(lang)
    onChange(lang)
    setDisplay(false)
  }

  return (
    <div className={style.select}>
      <button onClick={() => setDisplay(true)}>
        <IcoLang name={selected} />
      </button>
      {display && <div className={style.bg} onClick={() => setDisplay(false)} />}
      <div className={`${style.dropdown} ${display ? '' : style.hidden}`}>
        {langList.map((lang) => (
          <button key={lang} onClick={() => handleSelect(lang)}>
            <IcoLang name={lang} short={true} />
          </button>
        ))}
      </div>
    </div>
  )
}
