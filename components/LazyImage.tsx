import Image from 'next/image'
import { useState } from 'react'
import concatClassnames from '@/lib/functions'
import styles from '@/styles/components/LazyImage.module.scss'

type Props = {
  priority: boolean
  keyString: string
  src: string
  alt: string
  className?: string
}

const LazyImage = ({ priority, keyString, src, alt, className }: Props) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
      )}
      <Image
        priority={priority}
        key={keyString}
        src={src}
        alt={alt}
        loading={priority ? undefined : "lazy"}
        fill
        className={concatClassnames(
          className ? className : "",
          styles.lazyImage,
          isLoading
            ? styles.loading
            : styles.loaded
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  )
}

export default LazyImage