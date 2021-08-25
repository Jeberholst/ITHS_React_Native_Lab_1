const BASE_API_URL_V1 = "https://api.yomomma.info/"

export const fetchNew = async () => {

  return await fetch('https://api.kanye.rest')
     .then(async (response) => await response.json())
     .then((data) => {
       console.log(data)
       return data
     })
     .catch((error) => {
       console.error(error);
     });

}
