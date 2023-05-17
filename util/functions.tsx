export function concatClassnames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const cloudinaryBareUrl = `https://res.cloudinary.com/${cloudName}/image/upload`
const folderName = "KDS-studios"

export function getImage(imageKey: string, fileName: string) {
  return `${folderName}/${imageKey}/${fileName}`
}

export function getImageUrl(imageKey: string, fileName: string) {
  return `${cloudinaryBareUrl}/${getImage(imageKey, fileName)}`
}

export async function getBase64ImageUrl(imageKey: string, fileName: string): Promise<string> {
  const response = await fetch(`${cloudinaryBareUrl}/w_10/e_blur:1000,q_auto,f_webp/${getImage(imageKey, fileName)}`);
  const buffer = await response.arrayBuffer()
  const data = Buffer.from(buffer).toString('base64')
  return `data:image/webp;base64,${data}`
}