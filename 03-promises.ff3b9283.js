function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("1GAPJ");const s=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function d(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}s.addEventListener("submit",(t=>{t.preventDefault(),promises=[];for(let e=0;e<parseInt(a.value);e++){const t=e+1,n=parseInt(u.value)+e*parseInt(l.value);promises.push(d(t,n))}promises.forEach((t=>{t.then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}))}));
//# sourceMappingURL=03-promises.ff3b9283.js.map
