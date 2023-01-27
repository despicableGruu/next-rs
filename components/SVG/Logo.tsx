export default function Logo({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_1501_56)">
        <g clipPath="url(#clip1_1501_56)">
          <path
            d="M8 276.5L70.25 214.25L132.5 152"
            stroke="currentColor"
            strokeWidth={40}
          />
        </g>
        <path
          d="M221.502 8V452.5L28 256M291 338.5V448.5L484.5 256H290.5V60"
          stroke="currentColor"
          strokeWidth={40}
        />
        <g clipPath="url(#clip2_1501_56)">
          <path
            d="M250 23L349 123.5L450 223.5"
            stroke="currentColor"
            strokeWidth={40}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1501_56">
          <rect
            width="362.038"
            height="362.038"
            fill="white"
            transform="translate(0 256) rotate(-45)"
          />
        </clipPath>
        <clipPath id="clip1_1501_56">
          <rect
            width={122}
            height={133}
            fill="white"
            transform="translate(-4 138)"
          />
        </clipPath>
        <clipPath id="clip2_1501_56">
          <rect
            width={166}
            height={164}
            fill="white"
            transform="matrix(0 1 -1 0 434.5 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
