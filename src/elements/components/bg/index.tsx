import Icon from '../ico-get'
import style from './bg.module.scss'

interface ContainerProps {
  children?: React.ReactNode
}

export default function Background({ children }: ContainerProps) {
  return (
    <div className={style.bg}>
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
      <IconRow />
    </div>
  )
}

const IconRow = () => {
  return (
    <div className={style.row}>
      <Icon name='add_o' />
      <Icon name='apartment' />
      <Icon name='backup' />
      <Icon name='description' />
      <Icon name='error' />
      <Icon name='folder_o' />
      <Icon name='key' />
      <Icon name='languages' />
      <Icon name='logout' />
      <Icon name='info' />
      <Icon name='search' />
      <Icon name='settings' />
      <Icon name='settings_mob' />
      <Icon name='sorting' />
      <Icon name='splash' />
      <Icon name='storage' />
      <Icon name='statistic' />
      <Icon name='subject' />
      <Icon name='user' />
      <Icon name='warning' />
      <Icon name='work' />
      <Icon name='work_out' />
    </div>
  )
}
