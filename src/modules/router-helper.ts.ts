// https://regex101.com/r/3bHDIg/1
// https://regex101.com/r/I4w4UG/4
export function isValidRouterPath(path: string) {
	const routerPathSlugs = path.slice(1, path.length).split('/')

	console.log(routerPathSlugs);

	let isValid = null

	if (routerPathSlugs[0] !== '' && typeof routerPathSlugs[1] !== 'undefined' || routerPathSlugs[0] === '404') {
		isValid = routerPathSlugs[0]
	} else if (routerPathSlugs[0] === '' && typeof routerPathSlugs[1] === 'undefined') {
		isValid = '/'
	} else {
		isValid = false
	}

	console.log(isValid);
	
	
	return isValid
}
