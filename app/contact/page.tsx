import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { Linkedin, Mail, ShieldCheck } from "@/components/Icons"
import { Notice, Section, SectionHead } from "@/components/ui"
import { site, socialLinks } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Get in touch with " +
	site.name +
	" \u2014 email, LinkedIn, or the contact form below."

export const metadata: Metadata = {
	title: { absolute: "Contact \u2014 " + site.name },
	description,
	alternates: { canonical: "/contact/" },
	openGraph: {
		title: "Contact \u2014 " + site.name,
		description,
	},
}

export default function ContactPage() {
	return (
		<>
			<Section id="contact-header" className="page-header">
				<p className="eyebrow">Contact</p>
				<h1>Let's talk</h1>
				<p className="page-header__lede">
					Open to collaboration, feedback, and conversations about
					AI-assisted building. Reach out however is easiest for you.
				</p>
			</Section>

			<Section id="contact-main" labelledBy="contact-main-title">
				<SectionHead
					eyebrow="Get in touch"
					title="Send a message"
					titleId="contact-main-title"
				/>
				<div className="contact-grid">
					<div className="contact-methods">
						<a className="contact-method" href={"mailto:" + site.email}>
							<span className="contact-method__icon" aria-hidden="true">
								<Mail size={18} />
							</span>
							<div>
								<strong>Email</strong>
								<span>{site.email}</span>
							</div>
						</a>
						<a
							className="contact-method"
							href={socialLinks.linkedin.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="contact-method__icon" aria-hidden="true">
								<Linkedin size={18} />
							</span>
							<div>
								<strong>LinkedIn</strong>
								<span>Connect with me</span>
							</div>
						</a>
						<div className="contact-method contact-method--placeholder">
							<span className="contact-method__icon" aria-hidden="true">
								<ShieldCheck size={18} />
							</span>
							<div>
								<strong>Privacy</strong>
								<span>
									Only used to reply to you. Never shared or sold.
								</span>
							</div>
						</div>
					</div>

					<ContactForm />
				</div>
			</Section>

			<Section id="faq-shortcut" className="section--tight">
				<Notice>
					Have a quick question first? Check the{" "}
					<Link href="/faq/">FAQ page</Link>.
				</Notice>
			</Section>
		</>
	)
}
