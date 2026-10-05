function toCssVarFromTokenPath(tokenPath) {
	return `--${tokenPath
		.replace(/[\s_]+/g, '-')
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/\./g, '-')
		.replace(/-+/g, '-')
		.toLowerCase()}`
}

module.exports = { toCssVarFromTokenPath }
