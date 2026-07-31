import { THEME_STORAGE_KEY } from "@/components/ThemeToggle"

/**
 * Runs before paint so the saved theme is applied with no flash of the wrong
 * colours. Dark mode is the default when nothing has been saved.
 */
const script = `(function(){try{var k="${THEME_STORAGE_KEY}";var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:"dark";var e=document.documentElement;e.setAttribute("data-theme",t);e.style.colorScheme=t;e.setAttribute("data-js","true");}catch(err){document.documentElement.setAttribute("data-theme","dark");document.documentElement.setAttribute("data-js","true");}})();`

export function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: script }} />
}
