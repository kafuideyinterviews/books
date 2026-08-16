import type { LucideProps } from "lucide-react";
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  ChevronDown,
  ExternalLink,
  Globe,
  Mail,
  Megaphone,
  Mic,
  PenLine,
  Play,
  Quote,
  Search,
  Shield,
  Star,
  Store,
  Truck,
  MicVocal,
} from "lucide-react";

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function lucideProps({ size = 16, className, strokeWidth }: IconProps): LucideProps {
  return {
    size,
    className,
    strokeWidth: strokeWidth ?? 1.75,
    "aria-hidden": true,
  };
}

export function ArrowRightIcon(props: IconProps) {
  return <ArrowRight {...lucideProps(props)} />;
}

export function ExternalLinkIcon(props: IconProps) {
  return <ExternalLink {...lucideProps(props)} />;
}

export function StarIcon({
  filled = true,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <Star
      {...lucideProps(props)}
      fill={filled ? "currentColor" : "none"}
    />
  );
}

export function QuoteIcon(props: IconProps) {
  return <Quote {...lucideProps(props)} />;
}

export function BookOpenIcon(props: IconProps) {
  return <BookOpen {...lucideProps(props)} />;
}

export function PenIcon(props: IconProps) {
  return <PenLine {...lucideProps(props)} />;
}

export function TruckIcon(props: IconProps) {
  return <Truck {...lucideProps(props)} />;
}

export function BookmarkIcon({
  filled = false,
  ...props
}: IconProps & { filled?: boolean }) {
  return (
    <Bookmark
      {...lucideProps(props)}
      fill={filled ? "currentColor" : "none"}
    />
  );
}

export function PlayIcon(props: IconProps) {
  return <Play {...lucideProps(props)} />;
}

export function MicIcon(props: IconProps) {
  return <Mic {...lucideProps(props)} />;
}

export function SpeakIcon(props: IconProps) {
  return <Megaphone {...lucideProps(props)} />;
}

export function PodiumIcon(props: IconProps) {
  return <MicVocal {...lucideProps(props)} />;
}

export function ShieldIcon(props: IconProps) {
  return <Shield {...lucideProps(props)} />;
}

export function GlobeIcon(props: IconProps) {
  return <Globe {...lucideProps(props)} />;
}

export function StoreIcon(props: IconProps) {
  return <Store {...lucideProps(props)} />;
}

export function MailIcon(props: IconProps) {
  return <Mail {...lucideProps(props)} />;
}

export function ChevronDownIcon(props: IconProps) {
  return <ChevronDown {...lucideProps(props)} />;
}

export function SearchIcon(props: IconProps) {
  return <Search {...lucideProps(props)} />;
}

export function CediSign({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`cedi inline-flex items-center justify-center ${className ?? ""}`}
      style={{ fontSize: size, lineHeight: 1 }}
      aria-hidden
    >
      GH&#8373;
    </span>
  );
}

export function AmazonIcon(props: IconProps) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M13.2 17.8c-2.1 1.55-5.15 2.37-7.78 2.37-3.68 0-7-1.36-9.51-3.63-.2-.18-.02-.42.21-.28 2.71 1.58 6.05 2.52 9.5 2.52 2.33 0 4.9-.49 7.26-1.49.36-.15.66.23.32.51zm1.43-3.28c-.3.42-.84.6-1.26.3-3.22-1.97-8.1-2.56-11.86-1.37-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.08-1.32 9.65-.66 13.43 1.62.42.24.54.79.23 1.19zm.12-3.35C12.18 8.4 5.9 8.16 2.3 9.28c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38C5.88 5.94 12.75 6.18 17.1 8.76c.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3l-.21-.05z" />
    </svg>
  );
}

export function SelarIcon(props: IconProps) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" opacity="0.15" />
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

/** Large decorative open-book vector for empty cover states. */
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
      <path
        d="M20 60c40-18 90-18 130 6 40-24 90-24 130-6v140c-40-18-90-18-130 6-40-24-90-24-130-6V60Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M32 66c36-15 80-15 118 8v122c-38-23-82-23-118-8V66Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M288 66c-36-15-80-15-118 8v122c38-23 82-23 118-8V66Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M32 66c36-15 80-15 118 8 38-23 82-23 118-8M32 66v122c36-15 80-15 118 8V74M288 66v122c-36-15-80-15-118 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150 74v122"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M52 92c22-7 46-8 66 0M52 112c22-7 46-8 66 0M52 132c22-7 46-8 66 0M52 152c16-5 32-6 46-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M268 92c-22-7-46-8-66 0M268 112c-22-7-46-8-66 0M268 132c-22-7-46-8-66 0M268 152c-16-5-32-6-46-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
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
