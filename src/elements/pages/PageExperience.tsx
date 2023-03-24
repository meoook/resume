import { FormattedMessage } from 'react-intl'

interface PageExperienceProps {
  children?: React.ReactNode
}
export default function PageExperience(props: PageExperienceProps) {
  return (
    <>
      <h1>
        <FormattedMessage id='app.experience.title' />
      </h1>
      <section>
        <h3>
          <span className='pr-1'>2022-2023</span>
          <a href='https://my.games' className='underline' target='_blank'>
            my.games
          </a>
          <span className='pl-1'>IT Developer (backend)</span>
        </h3>
        <div>
          <FormattedMessage id='app.experience.language' />: Python
        </div>
        <div>
          <FormattedMessage id='app.experience.mygames.projects' />
        </div>
        <div>
          <FormattedMessage id='app.experience.mygames.content' />
        </div>
      </section>
      <section>
        <h3>
          <span className='pr-1'>2020-2022</span>
          <a href='https://theabyss.com' className='underline' target='_blank'>
            theabyss.com
          </a>
          <span className='pl-1'>IT Developer (backend/frontend)</span>
        </h3>
        <div>
          <FormattedMessage id='app.experience.language' />: Python, JS/TS
        </div>
        <div>
          <FormattedMessage id='app.experience.theabyss.projects' />
        </div>
        <div>
          <FormattedMessage id='app.experience.theabyss.content' />
        </div>
      </section>
      <section>
        <h3>
          <span className='pr-1'>2020-2020</span>
          <a href='https://pilot.ru' className='underline' target='_blank'>
            pilot.ru
          </a>
          <span className='pl-1'>IT Developer (mobile Android)</span>
        </h3>
        <div>
          <FormattedMessage id='app.experience.language' />: Framework Calipso
        </div>
        <div>
          <FormattedMessage id='app.experience.pilot.projects' />
        </div>
        <div>
          <FormattedMessage id='app.experience.pilot.content' />
        </div>
      </section>
      <section>
        <h3>
          <span className='pr-1'>2018-2020</span>
          <a href='https://it2g.ru' className='underline' target='_blank'>
            it2g.ru
          </a>
          <span className='pl-1'>application implementation specialist</span>
        </h3>
        <div>
          <FormattedMessage id='app.experience.language' />: Python
        </div>
        <div>
          <FormattedMessage id='app.experience.it2g.projects' />
        </div>
        <div>
          <FormattedMessage id='app.experience.it2g.content' />
        </div>
      </section>
      <section>
        <h3>
          <span className='pr-1'>2012-2018</span>
          <a href='https://itkey.com' className='underline' target='_blank'>
            itkey.com
          </a>
          <span className='pl-1'>System administrator</span>
        </h3>
        <div>
          <FormattedMessage id='app.experience.language' />: PHP, JS
        </div>
        <div>
          <FormattedMessage id='app.experience.itfb.projects' />
        </div>
        <div>
          <FormattedMessage id='app.experience.itfb.content' />
        </div>
      </section>
      <div>
        <FormattedMessage id='app.experience.final' />
      </div>
    </>
  )
}
