export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {dateStyle: "full"}).format(date); 
}
