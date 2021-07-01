const url = `http://localhost:3000`;


const cofnirmButton = document.querySelector('[data-action="push"]');
function download() {
    window.open('static', '_blank');
  }
cofnirmButton.addEventListener(`click`, (e) => {
    setTimeout(download, 1000)
  const data = document.querySelector("#textArea").value;
  const dataString = JSON.stringify({ data });

  e.preventDefault();
  sendData(url, dataString);
});

async function sendData(url, dataString) {
  const response = await fetch(url, {
    method: `POST`,
    headers: {
      "Content-type": "application/json"
    },
    body: dataString
  });

  if (!response.ok) {
    throw new Error(`Ошибка`);
  }

  return await response.text();
}
