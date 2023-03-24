import { useState, useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Page404 from './elements/pages/Page404'
import PageAbout from './elements/pages/PageAbout'
import PageSkills from './elements/pages/PageSkills'
import PageExperience from './elements/pages/PageExperience'
import Header from './elements/components/header/index'
import Container from './elements/components/container'
import { IntlProvider } from 'react-intl'
import en from './lang/en.json' // Import translations for English
import ru from './lang/ru.json' // Import translations for Russian
import PageTest from './elements/pages/PageTest'

const messages: { [key: string]: any } = { en, ru } // Define an object containing all translation files

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<PageAbout />} />
        <Route path='/skills' element={<PageSkills />} />
        <Route path='/experience' element={<PageExperience />} />
        <Route path='/test' element={<PageTest />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  const { pathname } = useLocation()
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleChangeLocale = (newLocale: string) => {
    setLocale(newLocale)
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Header changeLocale={handleChangeLocale} />
      <Container>
        <Outlet />
      </Container>
    </IntlProvider>
  )
}
