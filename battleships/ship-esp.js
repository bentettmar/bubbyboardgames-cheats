const board=document.getElementById("opponent-board");let ships=board.querySelectorAll("[ship]");const showShips=()=>{ships.forEach((e=>{if("empty"!=e.getAttribute("ship")){board.querySelectorAll(`[ship="${e.getAttribute("ship")}"]`).forEach((e=>{e.style.border="2px solid red"}))}}))};socket.on("takeTurnResponse",(e=>{"shootCoordinate"==e.turnType&&ships.forEach((e=>{"empty"!=e.getAttribute("ship")&&board.querySelectorAll(`[ship="${e.getAttribute("ship")}"]`).forEach((e=>{e.style.border="2px solid red"}))}))}));
