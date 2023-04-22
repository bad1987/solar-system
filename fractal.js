const nebula = document.getElementById("nebula");
const layer1 = document.getElementById("nebula-layer-1");
const layer2 = document.getElementById("nebula-layer-2");

function createLayer(layerElement, layerImage, direction) {
    const imageElement = document.createElement("img");
    imageElement.src = layerImage;
    layerElement.appendChild(imageElement);

    const duration = gsap.utils.random(50, 100);
    const rotation = gsap.utils.random(360);

    layerElement.style.animation = `rotate-${direction} ${duration}s linear infinite`;
    imageElement.style.animation = `spin ${duration}s linear infinite reverse`;

    const keyframes = `
      @keyframes rotate-${direction} {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(${rotation * direction}deg); }
      }
  
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = keyframes;
    document.head.appendChild(styleElement);

    layerElement.addEventListener("animationiteration", () => {
        layerElement.removeChild(imageElement);
        createLayer(layerElement, layerImage, direction * -1);
    });
}

createLayer(layer1, "nebula.jpg", 1);
createLayer(layer2, "nebula4.png", -1);