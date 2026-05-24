'use server'

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

export interface ReservationResult {
  success: boolean
  message: string
}

export async function submitReservation(
  data: ReservationData
): Promise<ReservationResult> {
  // Simulate server processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!data.name || !data.email || !data.date || !data.time || !data.guests) {
    return {
      success: false,
      message: 'Por favor, rellena todos los campos obligatorios.',
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: 'Por favor, introduce un email válido.',
    }
  }

  // In production: send email via Resend, save to DB, etc.
  console.log('New reservation:', data)

  return {
    success: true,
    message: `¡Reserva confirmada, ${data.name}! Te esperamos el ${data.date} a las ${data.time}. Recibirás un email de confirmación en breve.`,
  }
}
