export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="A.V Auto Service Logo"
    >
      <circle cx="20" cy="20" r="18" stroke="#ce0d14" strokeWidth="2" />
      <path
        d="M12 20 L18 14 L18 20 L28 20"
        stroke="#ce0d14"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="6" fill="#ce0d14" opacity="0.3" />
      <text x="20" y="32" fontSize="8" fill="#adb1b1" textAnchor="middle" fontWeight="700">
        AV
      </text>
    </svg>
  )
}

