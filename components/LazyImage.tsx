import { CldImage } from 'next-cloudinary';
import { useState } from 'react'
import { concatClassnames, getImageSrc } from '@/lib/functions'
import styles from '@/styles/components/LazyImage.module.scss'

type Props = {
  priority: boolean
  keyString: string
  imageKey: string
  fileName: string
  alt: string
  className?: string
}

const LazyImage = ({ priority, keyString, imageKey, fileName, alt, className }: Props) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div className={styles.lazyImageContainer}>
      {isLoading && (
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <CldImage
        priority={priority}
        key={keyString}
        src={getImageSrc(imageKey, fileName)}
        alt={alt}
        loading={priority ? undefined : "lazy"}
        fill
        sizes="100%"
        className={concatClassnames(
          className ? className : "",
          styles.lazyImage,
          isLoading
            ? styles.loading
            : styles.loaded
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

export default LazyImage