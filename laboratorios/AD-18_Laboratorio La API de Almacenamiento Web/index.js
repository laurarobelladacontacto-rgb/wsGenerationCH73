const itemsContainer = document.querySelector("#list-items")
const COLORS_URL = "https://reqres.in/api/unknown"
const STORAGE_KEY = "colorsList"
function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}
async function fetchColorsList() {
  try {
    const response = await fetch(COLORS_URL)

    if (!response.ok) {
      throw new Error("Error en la petición: " + response.status)
    }

    const result = await response.json()

    localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data))
    result.data.forEach(function (color) {
      addItem(color)
    })
  } catch (error) {
    console.error("No se pudo descargar la lista de colores:", error)
  }
}
function loadColorsFromStorage() {
  const storedColors = localStorage.getItem(STORAGE_KEY)

  if (storedColors === null) {
    return
  }

  const colors = JSON.parse(storedColors)

  colors.forEach(function (color) {
    addItem(color)
  })
}


function clearColorsList() {
  itemsContainer.innerHTML = ""
  localStorage.removeItem(STORAGE_KEY)
}
const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", clearColorsList)  

fetchColorsList()
loadColorsFromStorage()