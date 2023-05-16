export function concatClassnames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getImageUrl(imageKey: String, fileName: String) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const folderName = "KDS-studios"
  return `https://res.cloudinary.com/${cloudName}/image/upload/${folderName}/${imageKey}/${fileName}`;
}

export function getImageSrc(imageKey: String, fileName: String) {
  const folderName = "KDS-studios"
  return `${folderName}/${imageKey}/${fileName}`;
}