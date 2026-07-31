"use client"

import { useId, useState, type ChangeEvent, type FormEvent } from "react"
import { Check, Info } from "@/components/Icons"
import { site } from "@/lib/site"

type FormValues = {
	name: string
	email: string
	subject: string
	message: string
	/** Honeypot: real visitors never see or fill this field. */
	company: string
}

type FieldName = "name" | "email" | "subject" | "message"
type FormErrors = Partial<Record<FieldName, string>>

const initialValues: FormValues = {
	name: "",
	email: "",
	subject: "",
	message: "",
	company: "",
}

function isValidEmail(value: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validate(values: FormValues): FormErrors {
	const errors: FormErrors = {}

	if (!values.name.trim()) {
		errors.name = "Enter your name."
	}

	if (!values.email.trim()) {
		errors.email = "Enter your email address."
	} else if (!isValidEmail(values.email.trim())) {
		errors.email = "Enter a valid email address."
	}

	if (!values.subject.trim()) {
		errors.subject = "Enter a subject."
	}

	if (!values.message.trim()) {
		errors.message = "Enter a message."
	} else if (values.message.trim().length < 10) {
		errors.message = "Message should be at least 10 characters."
	}

	return errors
}

/**
 * Contact form. This is a static export with no backend, so there is no
 * server to receive a POST and no API keys for a third-party form service or
 * CAPTCHA. Spam protection uses a honeypot field instead (invisible to real
 * visitors, but bots that auto-fill every field trip it and are silently
 * dropped). On valid submission, the visitor's own email client opens with
 * the message pre-filled, addressed to the site owner — nothing is sent
 * without the visitor's explicit action in their mail app.
 */
export function ContactForm() {
	const baseId = useId()
	const [values, setValues] = useState<FormValues>(initialValues)
	const [errors, setErrors] = useState<FormErrors>({})
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
		"idle",
	)

	const handleChange =
		(field: keyof FormValues) =>
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const next = event.target.value
			setValues((prev) => ({ ...prev, [field]: next }))
			if (status === "error") setStatus("idle")
		}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// Honeypot tripped: pretend success and do nothing further.
		if (values.company.trim()) {
			setStatus("success")
			return
		}

		const nextErrors = validate(values)
		setErrors(nextErrors)

		if (Object.keys(nextErrors).length > 0) {
			setStatus("error")
			return
		}

		setStatus("submitting")

		const body =
			values.message.trim() +
			"\n\n---\nFrom: " +
			values.name.trim() +
			" (" +
			values.email.trim() +
			")"
		const mailtoUrl =
			"mailto:" +
			site.email +
			"?subject=" +
			encodeURIComponent(values.subject.trim()) +
			"&body=" +
			encodeURIComponent(body)

		window.location.href = mailtoUrl
		setStatus("success")
	}

	return (
		<form className="contact-form" noValidate onSubmit={handleSubmit}>
			<div className="form-field">
				<label htmlFor={baseId + "-name"}>Name</label>
				<input
					id={baseId + "-name"}
					name="name"
					type="text"
					autoComplete="name"
					value={values.name}
					onChange={handleChange("name")}
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? baseId + "-name-error" : undefined}
				/>
				{errors.name ? (
					<p className="form-field__error" id={baseId + "-name-error"}>
						{errors.name}
					</p>
				) : null}
			</div>

			<div className="form-field">
				<label htmlFor={baseId + "-email"}>Email</label>
				<input
					id={baseId + "-email"}
					name="email"
					type="email"
					autoComplete="email"
					value={values.email}
					onChange={handleChange("email")}
					aria-invalid={Boolean(errors.email)}
					aria-describedby={errors.email ? baseId + "-email-error" : undefined}
				/>
				{errors.email ? (
					<p className="form-field__error" id={baseId + "-email-error"}>
						{errors.email}
					</p>
				) : null}
			</div>

			<div className="form-field">
				<label htmlFor={baseId + "-subject"}>Subject</label>
				<input
					id={baseId + "-subject"}
					name="subject"
					type="text"
					autoComplete="off"
					value={values.subject}
					onChange={handleChange("subject")}
					aria-invalid={Boolean(errors.subject)}
					aria-describedby={errors.subject ? baseId + "-subject-error" : undefined}
				/>
				{errors.subject ? (
					<p className="form-field__error" id={baseId + "-subject-error"}>
						{errors.subject}
					</p>
				) : null}
			</div>

			<div className="form-field">
				<label htmlFor={baseId + "-message"}>Message</label>
				<textarea
					id={baseId + "-message"}
					name="message"
					rows={6}
					value={values.message}
					onChange={handleChange("message")}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={errors.message ? baseId + "-message-error" : undefined}
				/>
				{errors.message ? (
					<p className="form-field__error" id={baseId + "-message-error"}>
						{errors.message}
					</p>
				) : null}
			</div>

			{/* Honeypot spam trap: hidden from sighted and assistive-tech users alike, never reachable by keyboard. Bots that fill every field trip it. */}
			<div className="visually-hidden" aria-hidden="true">
				<label htmlFor={baseId + "-company"}>Company</label>
				<input
					id={baseId + "-company"}
					name="company"
					type="text"
					tabIndex={-1}
					autoComplete="off"
					value={values.company}
					onChange={handleChange("company")}
				/>
			</div>

			<button
				type="submit"
				className="btn btn--primary btn--block"
				disabled={status === "submitting"}
			>
				{status === "submitting" ? "Opening your email app\u2026" : "Send message"}
			</button>

			<div aria-live="polite">
				{status === "success" ? (
					<p className="form-status form-status--success">
						<Check size={16} />
						<span>
							Your email app should now be open with this message ready to
							send. If it did not open, email {site.email} directly.
						</span>
					</p>
				) : null}
				{status === "error" ? (
					<p className="form-status form-status--error">
						<Info size={16} />
						<span>Please fix the highlighted fields before sending.</span>
					</p>
				) : null}
			</div>
		</form>
	)
}
