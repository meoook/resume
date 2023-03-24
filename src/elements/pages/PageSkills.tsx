import { FormattedMessage } from 'react-intl'

interface PageSkillsProps {
  children?: React.ReactNode
}
export default function PageSkills(props: PageSkillsProps) {
  return (
    <>
      <h1>
        <FormattedMessage id='app.skills.title' />
      </h1>
      <section>
        <h2>Python</h2>
        <div>
          <FormattedMessage id='app.skills.python' />
        </div>
        <div>Django, DRF, numpy (pandas) and others</div>
        <div>
          <FormattedMessage id='app.skills.python.info' />
        </div>
      </section>
      <section>
        <h2>JS/TS</h2>
        <div>
          <FormattedMessage id='app.skills.js' />
        </div>
        <div>React, node.js, web3</div>
        <div>
          <FormattedMessage id='app.skills.js.info' />
        </div>
      </section>
      <section>
        <h2>Dart</h2>
        <div>
          <FormattedMessage id='app.skills.dart' />
        </div>
        <div>UI with Flutter, backend and util libs</div>
        <div>
          <FormattedMessage id='app.skills.dart.info' />
        </div>
      </section>
      <section>
        <h2>
          <FormattedMessage id='app.skills.additional' />
        </h2>
        <div>
          <FormattedMessage id='app.skills.additional.info' />
        </div>
      </section>
    </>
  )
}
