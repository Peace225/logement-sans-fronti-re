// Service Garantie Khady DIABATE
export const guarantee = {
  generateCertificate: async ({ student, property }) => {
    return {
      certificateId: `LSF-GAR-${Date.now()}`,
      garant: {
        name: 'Khady DIABATE',
        company: 'LM Global Education / Logement Sans Frontières',
        address: 'Paris, France',
        phone: '+33 6 00 00 00 00',
        email: 'garant@logementsansfrontieres.fr'
      },
      student: {
        name: student.name,
        nationality: student.country,
        university: student.university
      },
      property: {
        address: property.address,
        rent: property.price
      },
      coverage: 'Loyer + charges pendant toute la durée du bail',
      validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
  },

  checkEligibility: async (student) => {
    // LSF accepte TOUS les étudiants internationaux
    return {
      eligible: true,
      reason: 'Garantie LM Global Education',
      requiredDocs: ['Passeport', 'Lettre admission', 'Justificatif ressources']
    }
  }
}