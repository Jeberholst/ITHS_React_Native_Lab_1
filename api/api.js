const BASE_API_URL_V1 = "https://api.kanye.rest"

export const fetchNew = async () => {

  try {
    return await fetch(BASE_API_URL_V1)
       .then(async (response) => await response.json())
       .then((data) => {
         console.log(data)
         return data
       })
       .catch((error) => {
         console.error(error);
       });
  } catch (e) {
      console.log('Fetch error occured', e)
  }



}
