function copyTemplate(templateId, targetContainerId) {
  var templateElement = document.getElementById(templateId); 
  var targetContainer = document.getElementById(targetContainerId);

  var newElement = document.createElement(templateElement.tagName);
  newElement.setAttribute("class", templateElement.getAttribute("class"));
  newElement.innerHTML = templateElement.innerHTML;

  targetContainer.appendChild(newElement)
}

function removeLast(targetContainerId) {
  var targetContainer = document.getElementById(targetContainerId);
  var lastElement = targetContainer.lastElementChild;

  if (lastElement !== null) {
    targetContainer.removeChild(lastElement);
  }
}