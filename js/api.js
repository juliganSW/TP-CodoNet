let url="https://jsonplaceholder.typicode.com/users";//se define url y se referencia de donde van a venir los datos
      fetch (url)//se realiza la peticion  
      .then(response=> response.json())//la respuesta se dá en formato Json
      .then(data=> console.log(data))//se lee data y se muestra por consola
      .catch(error=> console.log(error))// si hay un error se "atrapa"en la palabra reservada catch