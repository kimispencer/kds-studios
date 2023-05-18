import Image from 'next/image'
import { useEffect, useState } from 'react'
import { concatClassnames, getImageUrl, getBase64ImageUrl } from '@/util/functions'
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
            sizes="(max-width: 768px) 70vw, 1400px"
            quality={75}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={concatClassnames(
              className ? className : ""
              , styles.lazyImage
              , isLoading
                  ? styles.loading
                  : styles.loaded
            )}
            onLoad={() => setLoading(false)}
          />
      }
    </div>
  )
}

export default LazyImage