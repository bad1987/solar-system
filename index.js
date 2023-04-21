function addPopupEvents(celestialObject, popup) {
  const popupTitle = popup.querySelector('.popup-title');
  const popupMass = popup.querySelector('.popup-mass');
  const popupRadius = popup.querySelector('.popup-radius');

  celestialObject.addEventListener('click', () => {
    popup.style.opacity = 1;
    popup.style.pointerEvents = 'auto';
    popupTitle.textContent = celestialObject.getAttribute('data-name');
    popupMass.textContent = 'Mass: ' + celestialObject.getAttribute('data-mass');
    popupRadius.textContent = 'Radius: ' + celestialObject.getAttribute('data-radius');

    const popupRect = popup.getBoundingClientRect();
    const popupWidth = popupRect.width;
    const popupHeight = popupRect.height;
    const popupX = window.innerWidth - popupWidth - 10;
    const popupY = window.innerHeight / 2 - popupHeight / 2;
    popup.style.top = popupY + 'px';
    popup.style.left = popupX + 'px';
  });
}

const popup = document.querySelector('.popup');
const sun = document.querySelector('.sun');
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');
const mars = document.querySelector('.mars');

addPopupEvents(sun, popup);
addPopupEvents(mercury, popup);
addPopupEvents(venus, popup);
addPopupEvents(earth, popup);
addPopupEvents(mars, popup);

document.addEventListener('click', (event) => {
  const isClickInsidePopup = popup.contains(event.target);
  const isClickInsideCelestialObject = (
    sun.contains(event.target) ||
    mercury.contains(event.target) ||
    venus.contains(event.target) ||
    earth.contains(event.target) ||
    mars.contains(event.target)
  );
  if (!isClickInsidePopup && !isClickInsideCelestialObject) {
    popup.style.opacity = 0;
    popup.style.pointerEvents = 'none';
  }
});

// down scaling the sizes
const scaleFactor = 0.5; // Adjust this value to scale the objects

mercury.style.width = `${50 * scaleFactor}px`;
mercury.style.height = `${50 * scaleFactor}px`;

venus.style.width = `${80 * scaleFactor}px`;
venus.style.height = `${80 * scaleFactor}px`;

earth.style.width = `${100 * scaleFactor}px`;
earth.style.height = `${100 * scaleFactor}px`;

mars.style.width = `${70 * scaleFactor}px`;
mars.style.height = `${70 * scaleFactor}px`;