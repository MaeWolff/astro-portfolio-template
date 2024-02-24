export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US").format(date);
}
