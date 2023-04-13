import axios from 'axios';

interface apiType {
    url:string
    method:string
}
interface data {
  description : string
  faqid : number
  faquid : string 
  groupID : number
  id : string 
  language : number
  priority : number 
  title : string 
}

const api:apiType = {
    url : 'https://api-dev.hesetazegi.com/FAQ/List',
    method : 'GET'
}
const Data= async()=>{
    try {
        const response = await axios(api);
        const data = response?.data?.content?.items;
        console.log(data)
        return data
      } catch (error) {
        console.error('error',error);
      }
}

export default Data