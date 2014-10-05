module.exports = function(ctx) {
	if (!ctx) return false
	var gl = ctx
	//compatibility with Chrome WebGL Inspector Addon
	if (typeof ctx.rawgl !== 'undefined')
		gl = ctx.rawgl
	if (typeof WebGLRenderingContext !== 'undefined' && gl instanceof WebGLRenderingContext)
		return true
	return false
}