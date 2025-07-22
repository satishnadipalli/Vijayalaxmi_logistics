"use client"

export default function AnimatedLogo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
      <svg width="800" height="600" viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background Grid Animation */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FFC107" strokeWidth="0.5" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
            </path>
          </pattern>

          {/* Gradient for letters */}
          <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFC107" stopOpacity="0.8">
              <animate attributeName="stop-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#FFD54F" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Crane arm gradient */}
          <linearGradient id="craneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>
        </defs>

        {/* Animated Grid Background */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated Crane Silhouette */}
        <g transform="translate(50, 100)">
          {/* Crane Base */}
          <rect x="0" y="400" width="60" height="80" fill="#FFC107" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
          </rect>

          {/* Crane Mast */}
          <rect x="25" y="200" width="10" height="200" fill="#FFC107" opacity="0.7">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" />
          </rect>

          {/* Crane Jib (rotating arm) */}
          <g transform="translate(30, 220)">
            <rect x="0" y="-3" width="200" height="6" fill="url(#craneGradient)" opacity="0.8">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 0;15 0 0;0 0 0;-10 0 0;0 0 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>

            {/* Hook */}
            <circle cx="180" cy="0" r="4" fill="#FFC107">
              <animate attributeName="cy" values="0;20;0;15;0" dur="6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* SVLP Letters with Animation */}
        <g transform="translate(300, 200)">
          {/* S */}
          <g>
            <path
              d="M 0 0 L 60 0 L 60 20 L 20 20 L 20 40 L 60 40 L 60 80 L 0 80 L 0 60 L 40 60 L 40 40 L 0 40 Z"
              fill="url(#letterGradient)"
              stroke="#FFC107"
              strokeWidth="2"
            >
              <animate attributeName="opacity" values="0;1;1;0.7" dur="4s" repeatCount="indefinite" begin="0s" />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8;1.1;1;1"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
              />
            </path>
          </g>

          {/* V */}
          <g transform="translate(80, 0)">
            <path
              d="M 0 0 L 15 0 L 30 60 L 45 0 L 60 0 L 40 80 L 20 80 Z"
              fill="url(#letterGradient)"
              stroke="#FFC107"
              strokeWidth="2"
            >
              <animate attributeName="opacity" values="0;1;1;0.7" dur="4s" repeatCount="indefinite" begin="0.5s" />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8;1.1;1;1"
                dur="4s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </path>
          </g>

          {/* L */}
          <g transform="translate(160, 0)">
            <path
              d="M 0 0 L 20 0 L 20 60 L 60 60 L 60 80 L 0 80 Z"
              fill="url(#letterGradient)"
              stroke="#FFC107"
              strokeWidth="2"
            >
              <animate attributeName="opacity" values="0;1;1;0.7" dur="4s" repeatCount="indefinite" begin="1s" />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8;1.1;1;1"
                dur="4s"
                repeatCount="indefinite"
                begin="1s"
              />
            </path>
          </g>

          {/* P */}
          <g transform="translate(240, 0)">
            <path
              d="M 0 0 L 50 0 L 50 40 L 20 40 L 20 80 L 0 80 L 0 40 L 0 0 Z M 20 20 L 30 20 L 30 20 L 20 20 Z"
              fill="url(#letterGradient)"
              stroke="#FFC107"
              strokeWidth="2"
            >
              <animate attributeName="opacity" values="0;1;1;0.7" dur="4s" repeatCount="indefinite" begin="1.5s" />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="0.8;1.1;1;1"
                dur="4s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </path>
          </g>
        </g>

        {/* Animated Particles */}
        <g>
          {[...Array(20)].map((_, i) => (
            <circle key={i} cx={100 + i * 30} cy={500} r="2" fill="#FFC107" opacity="0.4">
              <animate
                attributeName="cy"
                values="500;100;500"
                dur={`${3 + i * 0.2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.1}s`}
              />
              <animate
                attributeName="opacity"
                values="0;0.8;0"
                dur={`${3 + i * 0.2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.1}s`}
              />
            </circle>
          ))}
        </g>

        {/* Gear Animation */}
        <g transform="translate(650, 450)">
          <circle cx="0" cy="0" r="40" fill="none" stroke="#FFC107" strokeWidth="3" opacity="0.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="-3"
              y="-45"
              width="6"
              height="10"
              fill="#FFC107"
              opacity="0.6"
              transform={`rotate(${i * 45})`}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                values={`${i * 45} 0 0;${i * 45 + 360} 0 0`}
                dur="10s"
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </g>

        {/* Construction Lines */}
        <g stroke="#FFC107" strokeWidth="1" opacity="0.3">
          <line x1="0" y1="300" x2="800" y2="300">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="400" y1="0" x2="400" y2="600">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="5s" repeatCount="indefinite" begin="2.5s" />
          </line>
        </g>

        {/* Pulsing Circles */}
        <g>
          <circle cx="150" cy="150" r="5" fill="#FFC107" opacity="0.6">
            <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="650" cy="150" r="5" fill="#FFC107" opacity="0.6">
            <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" begin="1.5s" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" begin="1.5s" />
          </circle>
        </g>
      </svg>
    </div>
  )
}
