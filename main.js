const canvas = document.getElementById('shaderCanvas');
const gl = canvas.getContext('webgl');

// Vertex shader source code
const vertexShaderSource = `
    // Your vertex shader code here
`;

// Fragment shader source code (your GLSL shader code)
const fragmentShaderSource = `
    // Your GLSL shader code here
`;

// Create vertex shader
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

// Create fragment shader
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// Create shader program
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'a_position');
const resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');

// Set up buffer and other shader attributes/uniforms here

function render() {
    // Update any shader uniforms or attributes here

    // Clear the canvas
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw your shader here

    requestAnimationFrame(render);
}

render(

    precision highp float;
    uniform float time;
    uniform vec2 mouse;
    uniform vec2 resolution;
    uniform sampler2D backbuffer;

    float ll(vec2 uv, vec2 c0, vec2 c1, float t, float f, float a){
        return log(.001+(cos(t+length(uv-c0)*f)+1.)*(cos(t+length(uv-c1)*f)+1.))*0.01*a;
    }

    float bnc(float t){
        return abs(fract(t)-0.5)*2.;
    }

    void main( void ) {
        vec2 uv = gl_FragCoord.xy/resolution.xy*3.;
        float t = time*.8;

        float diff= .5+sin(t)*8.;
        vec2 b0 = vec2(bnc(t*0.04), 4.*bnc(t*.011));
        vec2 b1 = vec2(bnc(2.+t*.013), bnc(2.+t*.09));

        float a = ll(uv, b0, b1, t, 1., 1.2);
        float a2 = ll(uv+.4, b0, b1, t, 15., 1.);
        float a3 = ll(uv-.24, b0, b1, t, 16., 1.);
        
        float f = (a2- diff*a +a3)/.4;
        float c = (.3-(8.*f));
        vec3 cc = vec3(1.-c*c);
        vec3 col = 0.5 + 0.5*cos(time+uv.xyx+vec3(0,2,4));  
        vec3 b = mix(cc, 1./texture2D(backbuffer, .994*gl_FragCoord.xy/resolution.xy).xyz, .2); 
        cc /= b;    
        gl_FragColor = vec4(col*clamp((.08-cc), vec3(0),vec3(1)), 1.0 ); );



