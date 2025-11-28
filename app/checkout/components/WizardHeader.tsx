interface WizardHeaderProps {
  currentStep: number
}

export default function WizardHeader({ currentStep }: WizardHeaderProps) {
  const steps = [
    { number: 1, title: 'Shipping Details' },
    { number: 2, title: 'Payment Method' },
    { number: 3, title: 'Order Summary / Confirmation' }
  ]

  return (
    <div className="flex items-center justify-between mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex-1 flex flex-col items-center relative">
          {/* Circle */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium z-10 ${
              currentStep >= step.number
                ? 'bg-[#9A0417] text-white'
                : 'bg-gray-300 text-gray-600'
            }`}
          >
            {currentStep > step.number ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              step.number
            )}
          </div>

          {/* Title */}
          <span
            className={`mt-3 text-sm font-semibold text-center ${
              currentStep >= step.number ? 'text-[#9A0417]' : 'text-gray-600'
            }`}
          >
            {step.title}
          </span>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-6 left-1/2 w-full h-1 ${
                currentStep > step.number ? 'bg-[#9A0417]' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
