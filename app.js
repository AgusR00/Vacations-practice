// Set the target date - February 28, 2026
const targetDate = new Date("2026-02-28T00:00:00")

function updateCounter() {
  const currentDate = new Date()

  // Calculate difference in milliseconds
  const diffMs = targetDate - currentDate

  // If the date has passed
  if (diffMs <= 0) {
    document.getElementById("counter").innerHTML = "¡Ya llegó el día!"
    return
  }

  // Calculate time units
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)

  // Calculate months and remaining days
  const tempDate = new Date(currentDate)
  let months = 0
  let remainingDays = days

  while (tempDate.getTime() + 30 * 24 * 60 * 60 * 1000 <= targetDate.getTime()) {
    months++
    tempDate.setMonth(tempDate.getMonth() + 1)
  }

  // Recalculate remaining days after extracting months
  const diffMsAfterMonths = targetDate - tempDate
  remainingDays = Math.floor(diffMsAfterMonths / (1000 * 60 * 60 * 24))

  // Correct pluralization in Spanish
  const monthText = months === 1 ? "mes" : "meses"
  const dayText = remainingDays === 1 ? "día" : "días"
  const hourText = hours === 1 ? "hora" : "horas"
  const minuteText = minutes === 1 ? "minuto" : "minutos"
  const secondText = seconds === 1 ? "segundo" : "segundos"

  // Build message without years
  document.getElementById("counter").innerHTML = `Faltan:<br>
    ${months} ${monthText}, ${remainingDays} ${dayText}, ${hours} ${hourText}, ${minutes} ${minuteText} y ${seconds} ${secondText}.`
}

// Update counter immediately and then every second
updateCounter()
setInterval(updateCounter, 1000)
