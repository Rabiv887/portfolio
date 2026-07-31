import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Base({ size = 18, children, ...props }: IconProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.7}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
			{...props}
		>
			{children}
		</svg>
	)
}

export const ArrowRight = (p: IconProps) => (
	<Base {...p}>
		<path d="M5 12h13" />
		<path d="m12 5 7 7-7 7" />
	</Base>
)

export const ArrowUpRight = (p: IconProps) => (
	<Base {...p}>
		<path d="M7 17 17 7" />
		<path d="M8 7h9v9" />
	</Base>
)

export const Plus = (p: IconProps) => (
	<Base {...p}>
		<path d="M12 5v14" />
		<path d="M5 12h14" />
	</Base>
)

export const Menu = (p: IconProps) => (
	<Base {...p}>
		<path d="M4 7h16" />
		<path d="M4 12h16" />
		<path d="M4 17h16" />
	</Base>
)

export const Close = (p: IconProps) => (
	<Base {...p}>
		<path d="M6 6l12 12" />
		<path d="M18 6 6 18" />
	</Base>
)

export const Sun = (p: IconProps) => (
	<Base {...p}>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
	</Base>
)

export const Moon = (p: IconProps) => (
	<Base {...p}>
		<path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
	</Base>
)

export const Mail = (p: IconProps) => (
	<Base {...p}>
		<rect x="3" y="5" width="18" height="14" rx="2.5" />
		<path d="m3.5 7 8.5 6 8.5-6" />
	</Base>
)

export const LinkedIn = (p: IconProps) => (
	<Base {...p} strokeWidth={1.6}>
		<rect x="3" y="3" width="18" height="18" rx="3" />
		<path d="M7.5 10.5V17" />
		<path d="M7.5 7.4v.1" />
		<path d="M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
		<path d="M11.5 10.5V17" />
	</Base>
)

export const GitHub = (p: IconProps) => (
	<Base {...p} strokeWidth={1.6}>
		<path d="M9 19c-4 1.4-4-2.1-5.5-2.6M15 21v-3.3a2.9 2.9 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0C6.6 2.1 5.6 2.4 5.6 2.4a4.2 4.2 0 0 0-.1 3.2 4.5 4.5 0 0 0-1.2 3.2c0 4.4 2.7 5.4 5.3 5.7a2.9 2.9 0 0 0-.8 2.2V21" />
	</Base>
)

export const Code = (p: IconProps) => (
	<Base {...p}>
		<path d="m9 17-5-5 5-5" />
		<path d="m15 7 5 5-5 5" />
	</Base>
)

export const Bot = (p: IconProps) => (
	<Base {...p}>
		<rect x="4" y="8" width="16" height="11" rx="3" />
		<path d="M12 5V8" />
		<circle cx="12" cy="4" r="1.2" />
		<path d="M9 13v1.5M15 13v1.5" />
	</Base>
)

export const Spark = (p: IconProps) => (
	<Base {...p}>
		<path d="M12 3.5 13.7 9 19 10.7 13.7 12.4 12 18l-1.7-5.6L5 10.7 10.3 9Z" />
		<path d="M18.5 16.5 19 18.2l1.7.5-1.7.6-.5 1.7-.6-1.7-1.7-.6 1.7-.5Z" />
	</Base>
)

export const Compass = (p: IconProps) => (
	<Base {...p}>
		<circle cx="12" cy="12" r="9" />
		<path d="m15.2 8.8-2 4.4-4.4 2 2-4.4Z" />
	</Base>
)

export const Check = (p: IconProps) => (
	<Base {...p}>
		<path d="m5 12.5 4.5 4.5L19 7.5" />
	</Base>
)

export const Image = (p: IconProps) => (
	<Base {...p}>
		<rect x="3" y="4" width="18" height="16" rx="2.5" />
		<circle cx="8.5" cy="9.5" r="1.5" />
		<path d="m4 17 4.5-4.5L13 17" />
		<path d="m14 15 2.5-2.5L20 16" />
	</Base>
)

export const Info = (p: IconProps) => (
	<Base {...p}>
		<circle cx="12" cy="12" r="9" />
		<path d="M12 11v5" />
		<path d="M12 8v.1" />
	</Base>
)

export const Document = (p: IconProps) => (
	<Base {...p}>
		<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
		<path d="M14 3v5h5" />
		<path d="M9 13h6M9 16.5h4" />
	</Base>
)

export const iconMap = {
	code: Code,
	bot: Bot,
	spark: Spark,
	compass: Compass,
} as const
