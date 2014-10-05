var isWebglContext = require('./')
var test = require('tape').test
var getGL = require('webgl-context')

test('whether the given object is a WebGL context', function(t) {
    t.equal(isWebglContext(5), false)
    t.equal(isWebglContext('foo'), false)

    var gl = getGL()
    if (!gl)
    	throw new Error("Environment does not support WebGL! unable to test")
    
    t.equal(isWebglContext(gl), true)
    t.equal(isWebglContext(gl.canvas), false)
    t.end()
})