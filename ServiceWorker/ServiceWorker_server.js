self.addEventListener('install', (event) => console.log(event.type));
self.addEventListener('activate', (event) => console.log(event.type));




// async function f() {
//   let clients_ = await clients.matchAll();
  
//   for (let client of clients_) {
//     // client.postMessage(clients_.length + '_');
    
//     // console.log(clients_.length + '_');
//     console.log(new Date());
//   }
// }

// setInterval(f, 1e3);
