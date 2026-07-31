import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { ArrowRight, GitHub, LinkedIn, Mail } from "@/components/Icons"
import { Notice, Section, SectionHead } from "@/components/ui"
import { site, socialLinks } from "@/lib/site"

import "@/styles/projects.css"

const description =
	"Get in touch with " + site.name + " by email, LinkedIn, or the contact form below."

export const metadata: Metadata = {
	title: { absolute: "Contact " + site.name },
	description,
	alternates: { canonical: "/contact/" },
	openGraph: {
		title: "Contact " + site.name,
		description,
	},
}

export default function ContactPage() {
	return (
		<>
			<Section id="contact-header" className="page-header">
				<p className="eyebrow">Contact</p>
				<h1>Get in touch</h1>
				<p className="page-header__lede">
					I am open to collaborations, internships, and interesting technology
					projects. Email is the fastest way to reach me, and I reply to every
					genuine message.
				</p>
			</Section>

			<Section id="contact-main" labelledBy="contact-main-title">
				<SectionHead
					eyebrow="Ways to reach me"
					title="Send a message"
					titleId="contact-main-title"
				/>
				<div className="contact-grid">
					<div className="contact-methods">
						<div className="contact-method">
							<span className="contact-method__icon" aria-hidden="true">
								<Mail size={20} />
							</span>
							<div>
								<h3>Email</h3>
								<p>
									<a href={"mailto:" + site.email}>{site.email}</a>
								</p>
							</div>
						</div>

						<div className="contact-method">
							<span className="contact-method__icon" aria-hidden="true">
								<LinkedIn size={20} />
							</span>
							<div>
								<h3>LinkedIn</h3>
								<p>
									<a
										href={socialLinks.linkedin.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										Connect on LinkedIn
									</a>
								</p>
							</div>
						</div>

						<div className="contact-method contact-method--placeholder">
							<span className="contact-method__icon" aria-hidden="true">
								<GitHub size={20} />
							</span>
							<div>
								<h3>GitHub</h3>
								<p>Profile coming soon.</p>
							</div>
						</div>

						<Notice>
							Only your name, email, subject, and message are used to reply to
							you. Nothing here is stored on a server or shared with anyone
							else.
						</Notice>
					</div>

					<ContactForm />
				</div>
			</Section>

			<Section id="faq-shortcut" className="section--tight">
				<div className="faq-shortcut">
					<div>
						<h2>Have a quick question first?</h2>
						<p>
							Common questions about how I work and what I use AI for are
							answered on the FAQ page.
						</p>
					</div>
					<Link className="btn btn--secondary" href="/faq/">
						Read the FAQ
						<ArrowRight size={17} />
					</Link>
				</div>
			</Section>
		</>
	)
}
