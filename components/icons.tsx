type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function base({ size = 16, className }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    className,
    "aria-hidden": true as const,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M14 4h6v6M20 4l-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({
  filled = true,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg {...base(props)}>
      <path
        d="m12 2.5 2.94 5.95 6.57.96-4.76 4.63 1.13 6.55L12 17.5l-5.88 3.09 1.13-6.55L2.5 9.41l6.56-.96L12 2.5Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M4 5h6v6H6.5c0 2.5 1 4 3.5 4.5V18c-4.5-.5-6-3.5-6-8V5Zm10 0h6v6h-3.5c0 2.5 1 4 3.5 4.5V18c-4.5-.5-6-3.5-6-8V5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M2 4c3-1 6-1 8 1v13c-2-2-5-2-8-1V4Zm20 0c-3-1-6-1-8 1v13c2-2 5-2 8-1V4Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M1 4h14v12H1V4Zm14 4h4l3 4v4h-7M5.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookmarkIcon({
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <svg {...base(props)}>
      <path
        d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M17 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10Zm-7 6v6l5-3-5-3Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M12 2 4 5.5V11c0 5 3.4 9.2 8 11 4.6-1.8 8-6 8-11V5.5L12 2Zm-3 9.5 2.2 2.2L15.5 9.4"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
      />
      <path
        d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M4 7h16l-1 4a3 3 0 0 1-3 2.5A3 3 0 0 1 13 11a3 3 0 0 1-3 2.5A3 3 0 0 1 7 11a3 3 0 0 1-3 2.5L4 7Zm1-4h14l1 4H4l1-4Zm0 10.5V21h14v-7.5M9 21v-5h6v5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 2}
      />
      <path
        d="m20 20-3.5-3.5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CediSign({
  size = 14,
  className,
}: {
  size?: number | string;
  className?: string;
}) {
  // Drawn as SVG so the ₵ glyph always renders (many UI fonts omit U+20B5).
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "-0.12em" }}
    >
      <path
        d="M16.2 6.2A6.5 6.5 0 0 0 7.8 6.2M16.2 17.8A6.5 6.5 0 0 1 7.8 17.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M5 10h13M5 14h13"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AmazonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <text
        x="12"
        y="13"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        a
      </text>
      <path
        d="M5 16.5c4.5 3 9.5 3 14 0"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="m19 16.5-.4-2m.4 2-2 .4"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.8}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SelarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth={props.strokeWidth ?? 1.6}
        fill="none"
      />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontSize="11.5"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        fill="currentColor"
      >
        S
      </text>
    </svg>
  );
}

/** Large decorative open-book vector for hero / empty states. */
export function OpenBookVector({
  className,
  size = 320,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 320 240"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Back cover */}
      <path
        d="M20 60c40-18 90-18 130 6 40-24 90-24 130-6v140c-40-18-90-18-130 6-40-24-90-24-130-6V60Z"
        fill="currentColor"
        opacity="0.08"
      />
      {/* Left page */}
      <path
        d="M32 66c36-15 80-15 118 8v122c-38-23-82-23-118-8V66Z"
        fill="currentColor"
        opacity="0.14"
      />
      {/* Right page */}
      <path
        d="M288 66c-36-15-80-15-118 8v122c38-23 82-23 118-8V66Z"
        fill="currentColor"
        opacity="0.14"
      />
      {/* Page outlines */}
      <path
        d="M32 66c36-15 80-15 118 8 38-23 82-23 118-8M32 66v122c36-15 80-15 118 8V74M288 66v122c-36-15-80-15-118 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Spine */}
      <path
        d="M150 74v122"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Text lines left */}
      <path
        d="M52 92c22-7 46-8 66 0M52 112c22-7 46-8 66 0M52 132c22-7 46-8 66 0M52 152c16-5 32-6 46-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Text lines right */}
      <path
        d="M268 92c-22-7-46-8-66 0M268 112c-22-7-46-8-66 0M268 132c-22-7-46-8-66 0M268 152c-16-5-32-6-46-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* Bookmark ribbon */}
      <path
        d="M226 70v46l8-7 8 7V72"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}

export function StarRow({
  count = 5,
  size = 14,
  className,
}: {
  count?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className ?? ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} size={size} filled />
      ))}
    </span>
  );
}
