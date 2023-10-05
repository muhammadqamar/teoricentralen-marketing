export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export const ContentDateFormat = (inputDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(inputDate)
  return date.toLocaleDateString('en-US', options) // 'id-ID' represents the Indonesian locale for month names
}
