import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

export const addToWatchListAPI=async(movie)=>{
  return await commonAPI("POST",`${server_url}/watchlist`,movie)
}
export const getAllWatchListAPI=async()=>{
  return await commonAPI("GET",`${server_url}/watchlist`,"")
}
export const removeFromWatchListAPI=async(id)=>{
  return await commonAPI("DELETE",`${server_url}/watchlist/${id}`,{})
}
export const editTitleAPI=async(id,toupdatemovie)=>{
  return await commonAPI("PUT",`${server_url}/watchlist/${id}`,toupdatemovie)
}