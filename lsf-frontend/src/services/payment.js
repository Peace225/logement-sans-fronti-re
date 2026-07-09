// Stripe / PayPal pour LSF
export const payment = {
  // Packs installation
  packs: {
    essentiel: { price: 19900, name: 'Pack Essentiel' }, // en centimes
    confort: { price: 39900, name: 'Pack Confort' },
    premium: { price: 69900, name: 'Pack Premium' }
  },

  createCheckout: async ({ pack, studentEmail, propertyId }) => {
    console.log('Création paiement:', pack)
    // TODO: stripe.checkout.sessions.create
    return {
      sessionId: 'cs_test_' + Date.now(),
      url: `/success?pack=${pack}&property=${propertyId}`,
      amount: payment.packs[pack].price
    }
  },

  // Paiement loyer mensuel
  payRent: async ({ amount, propertyId }) => {
    return { success: true, receipt: `LSF-RENT-${Date.now()}` }
  }
}