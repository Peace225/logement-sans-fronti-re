// Service email / WhatsApp LSF
export const email = {
  // Envoi à Khady et étudiant
  sendBookingConfirmation: async ({ student, property, pack }) => {
    const message = `
      Nouvelle réservation LSF
      Étudiant: ${student.name} (${student.country})
      Logement: ${property.title}
      Pack: ${pack}
      Garant: Khady DIABATE
    `
    console.log('Email envoyé:', message)
    // TODO: Resend / SendGrid
    return { sent: true }
  },

  sendOwnerNotification: async ({ owner, student, property }) => {
    console.log(`Notification propriétaire ${owner}: ${student.name} a réservé`)
    return { sent: true }
  },

  // WhatsApp via Twilio
  sendWhatsApp: async ({ to, message }) => {
    console.log(`WhatsApp to ${to}: ${message}`)
    // TODO: Twilio API
    return { sent: true, provider: 'Twilio' }
  }
}