import styles from '@/styles/components/DeviceFrame.module.scss'

type Props = {
  isDesktop: boolean
}

const DeviceFrame = ({ isDesktop }: Props) => {
  return (
    isDesktop ?
    <div className={styles.macbook}>
      <div className={styles.deviceFrame}></div>
      <div className={styles.deviceStripe}></div>
      <div className={styles.deviceHeader}></div>
      <div className={styles.deviceSensors}></div>
      <div className={styles.deviceBtns}></div>
      <div className={styles.devicePower}></div>
    </div>
    : <div className={styles.iphoneX}>
        <i>Speaker</i>
        <b>Camera</b>
        <s>10:24</s>
        <span>Left action button</span>
        <span>Right action button</span>
      </div>
  )
}

export default DeviceFrame