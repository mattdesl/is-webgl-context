/*globals WebGL2RenderingContext,WebGLRenderingContext*/
module.exports = function isWebGLContext (ctx) {
  if (!ctx) return false
  var gl = ctx

  // compatibility with Chrome WebGL Inspector Addon
  if (typeof ctx.rawgl !== 'undefined') {
    gl = ctx.rawgl
  }
  if ((typeof WebGLRenderingContext !== 'undefined' 
      && gl instanceof WebGLRenderingContext) || 
    (typeof WebGL2RenderingContext !== 'undefined'
      && gl instanceof WebGL2RenderingContext)) {
    return true
  }
  return false
}
