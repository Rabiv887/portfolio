const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("mjh-theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`

export function ThemeScript() {
	return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}
