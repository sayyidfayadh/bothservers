import axios from 'axios'
export const commonAPI=async(httpmethod,url,reqBody,reqHeader)=>{
  let reqConfig={
    method:httpmethod,
    url,
    headers:{"content-type":"application/json"},
    data:reqBody
  }
  try {
    const response=await axios(reqConfig)
    return response
  } catch (error) {
    return error
  }
}