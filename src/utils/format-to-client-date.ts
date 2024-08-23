export const formatToClientDate = (date?: Date) => {
  if (!date) {
    return ''
  } else {
    return new Date(date).toLocaleDateString()
  }
}