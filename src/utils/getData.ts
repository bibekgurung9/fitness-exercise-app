import axios from "axios";

export const exerciseOptions = {
  method: 'GET',
  params: {limit: '50'},
  headers: {
    'X-RapidAPI-Key': '49775dbe0emsh5c742813c663e08p142eb6jsn0b874f42996f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '49775dbe0emsh5c742813c663e08p142eb6jsn0b874f42996f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url:any, options:any) => {
  try{
    const response = await axios.get({
      url,
      ...options,
    })
    return response.data
  } catch(error){
    console.log("ERROR_GET_DATA", error);
    throw error;
  } 
 
}