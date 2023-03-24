import { useState } from 'react'
import style from './switch.module.scss'

interface ThemeSwitchProps {
  children?: React.ReactNode
}

export default function ThemeSwitch({ children }: ThemeSwitchProps) {
  const [toggled, setToggled] = useState(true)

  const themeSelect = (night: boolean) => {
    // const body = document.getElementById('root')
    const body = document.getElementsByTagName('body')[0]
    body.style.setProperty('--color-primary', night ? '#fff' : '#000')
    body.style.setProperty('--color-secondary', night ? '#bbc' : '#777')
    body.style.setProperty('--color-body', night ? '#1d1d23' : '#e4e4e4')
    body.style.setProperty('--color-dialog', night ? '#262630' : '#fff')
  }

  return (
    <div
      className={`${style.toggle} ${toggled ? style.night : ''}`}
      onClick={() => {
        themeSelect(!toggled)
        setToggled((prev) => !prev)
      }}>
      <div className={style.notch}>
        <div className={style.crater} />
        <div className={style.crater} />
      </div>
      <div className={`${style.shape} ${style.md}`} />
      <div className={`${style.shape} ${style.lg}`} />
      <div className={`${style.shape} ${style.sm}`} />
      <div className={`${style.shape} ${style.sm}`} />
    </div>
  )
}
