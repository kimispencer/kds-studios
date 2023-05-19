import Image from 'next/image'
import { useEffect, useState, CSSProperties } from 'react'
import { concatClassnames, getImageUrl, getBase64ImageUrl } from '@/util/functions'
import styles from '@/styles/components/LazyImage.module.scss'

type Props = {
  priority: boolean
  keyString: string
  imageKey: string
  fileName: string
  alt: string
  className?: string
  style_?: CSSProperties
}

const LazyImage = ({ priority, keyString, imageKey, fileName, alt, className, style_ }: Props) => {
  const [isLoading, setLoading] = useState(true)
  const [blurDataURL, setBlurDataURL] = useState('')

  useEffect(() => {
    const fetchBlurDataURL = async () => {
      const url = await getBase64ImageUrl(imageKey, fileName);
      setBlurDataURL(url);
    };

    fetchBlurDataURL();
  }, [imageKey, fileName])

  return (
    <div className={styles.lazyImageContainer}>
      {!blurDataURL ?
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.loadingSpinner}></div>
        </div>
        : <Image
            priority={priority}
            key={keyString}
            src={getImageUrl(imageKey, fileName)}
            alt={alt}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={concatClassnames(
              styles.lazyImage
              , isLoading
                  ? styles.loading
                  : concatClassnames(styles.loaded, className ? className : "")
            )}
            style={style_}
            onLoadingComplete={() => setLoading(false)}
          />
      }
    </div>
  )
}

export default LazyImage