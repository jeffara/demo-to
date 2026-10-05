/* eslint-disable @typescript-eslint/explicit-function-return-type */
const isAlreadyRegisteredError = (error) =>
	/already (been )?registered/i.test(String(error?.message ?? error))

export const registerTransformOnce = (styleDictionary, definition) => {
	if (styleDictionary.transform?.[definition.name]) {
		return
	}

	try {
		styleDictionary.registerTransform(definition)
	} catch (error) {
		if (!isAlreadyRegisteredError(error)) {
			throw error
		}
	}
}

export const registerTransformGroupOnce = (styleDictionary, definition) => {
	if (styleDictionary.transformGroup?.[definition.name]) {
		return
	}

	try {
		styleDictionary.registerTransformGroup(definition)
	} catch (error) {
		if (!isAlreadyRegisteredError(error)) {
			throw error
		}
	}
}

export const registerFormatOnce = (styleDictionary, definition) => {
	if (styleDictionary.format?.[definition.name]) {
		return
	}

	try {
		styleDictionary.registerFormat(definition)
	} catch (error) {
		if (!isAlreadyRegisteredError(error)) {
			throw error
		}
	}
}
