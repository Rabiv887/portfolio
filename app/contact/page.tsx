import type { Metadata } from "next"
import { PhasePlaceholder } from "@/components/PhasePlaceholder"

export const metadata: Metadata = {
	title: { absolute: "Contact Md. Julmot Hossain" },
	description:
		"Get in touch with Md. Julmot Hossain by email or through the contact form.",
	alternates: { canonical: "/contact/" },
}

export default function ContactPage() {
	return (
		<PhasePlaceholder
			eyebrow="Contact"
			title="Contact Md. Julmot Hossain"
			description="The contact form with spam protection is built in a later phase. Until then, email is the fastest way to reach me: contact@julmothossain.me"
			phase="Phase 5"
		/>
	)
}
