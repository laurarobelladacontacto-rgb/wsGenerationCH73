// Muestra una alerta con los enlaces de la página
function showLinksInfo() {
  const links = document.links;
  const total = links.length;
  const firstLink = links[0].href;
  const lastLink = links[total - 1].href;

  alert(`Number of links: ${total}
First link: ${firstLink}
Last link: ${lastLink}`);
}