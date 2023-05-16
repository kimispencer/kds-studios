export function concatClassnames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const folderName = "KDS-studios"

export function getImageSrc(imageKey: String, fileName: String) {
  return `${folderName}/${imageKey}/${fileName}`;
}

export function getImageUrl(imageKey: String, fileName: String) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/${getImageSrc(imageKey, fileName)}`;
}