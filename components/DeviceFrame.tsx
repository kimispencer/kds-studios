import styles from '@/styles/components/DeviceFrame.module.scss'

const DeviceFrame = () => {
  return (
    <div className={styles.iphone}>
      <div className={styles.content}>
        <div className={styles.iphoneTop}>
          <span className={styles.camera}></span>
          <span className={styles.sensor}></span>
          <span className={styles.speaker}></span>
        </div>
        <div className={styles.iphoneScreen}>
          {/* <ImageLoader className="screenshot" src={this.props.src} imgKey={this.props.imgKey} isBg={false} /> */}
        </div>
      </div>
    </div>
  )
}

export default DeviceFrame