const brands = [
  'Bosch',
  'Valeo',
  'Continental',
  'Delphi',
  'Mann Filter',
  'Mobil',
]

export default function Partners() {
  return (
    <section className="py-12 bg-gray-800/40 border-y border-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-secondary text-sm uppercase tracking-wider mb-2">
            Parteneri & Branduri
          </p>
          <p className="text-light text-sm">
            Lucrăm cu piese și componente de la producători de încredere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-light/5 rounded-lg border border-secondary/20 hover:border-accent/50 transition-colors"
            >
              <span className="text-secondary font-semibold text-sm">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

