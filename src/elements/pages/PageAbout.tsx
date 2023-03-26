import { FormattedMessage } from 'react-intl'

interface PageAboutProps {
  children?: React.ReactNode
}
export default function PageAbout(props: PageAboutProps) {
  return (
    <>
      <h1>
        <FormattedMessage id='app.about.title' />
      </h1>
      <hr />
      <div>
        <FormattedMessage id='app.about.contact' />
      </div>
      <div>
        <FormattedMessage id='app.about.location' />
      </div>
      <div>
        <FormattedMessage id='app.about.repository' />
        :&nbsp;
        <a href='https://github.com/meoook' className='underline' target='_blank'>
          https://github.com/meoook
        </a>
      </div>
      <div>
        mail:&nbsp;
        <a href='mailto:meoook@gmail.com' className='underline'>
          meoook@gmail.com
        </a>
      </div>
      <h3>FullStack:</h3>
      <div>
        <FormattedMessage id='app.about.languages' />
      </div>
      <h3>
        <FormattedMessage id='app.about.talkon.title' />:
      </h3>
      <div>
        <FormattedMessage id='app.about.talkon' />
      </div>
      <h3>
        <FormattedMessage id='app.about.tasks.title' />:
      </h3>
      <div>
        <FormattedMessage id='app.about.tasks' />
      </div>
      <h3>
        <FormattedMessage id='app.skills.title' />:
      </h3>
      <div>
        <FormattedMessage id='app.about.skills' />
      </div>
      <h3>
        <FormattedMessage id='app.about.edu.title' />:
      </h3>
      <div>
        <FormattedMessage id='app.about.edu' /> [2015]
      </div>
      <h3>
        <FormattedMessage id='app.about.ref.title' />:
      </h3>
      <div>
        <FormattedMessage id='app.about.ref' />
      </div>
    </>
  )
}
