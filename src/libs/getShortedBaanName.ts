export default function getShortedBaanName(num: number) {
  const ShortedBannName: string[] = [
    "ติดตลก",
    "ติดเตียง",
    "ติดบั๊ก",
    "ติดลิฟต์",
    "ติดจุฬา",
    "ติดแกลม",
    "ติดใจ",
    "ติดฝน",
    "ติดสตาฟ",
    " เลือก",
  ];
  return ShortedBannName[num - 1] ?? "";
}
