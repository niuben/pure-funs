export function filterXss(str) {
	return str.replace(/</g, "&lt;").replace(/>/g, "&gt");
}
