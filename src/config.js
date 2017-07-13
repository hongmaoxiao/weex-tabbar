export default {
	js(url) {
		var bundleUrl = weex.config.bundleUrl
		bundleUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('/'))
		if(typeof(window) == "undefined") {
			while(url.startsWith('../')) {
				url = url.substr(3)
				bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('/'))
			}
			return bundleUrl + url
		} else {
			return bundleUrl + "?page=/dist" + encodeURI(url) 
		}
	}
}