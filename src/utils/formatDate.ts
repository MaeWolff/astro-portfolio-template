export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', { dateStyle: 'short', timeZone: 'Asia/Shanghai' }).format(date));
}
