import axios from 'axios';


export const KEY = 'AIzaSyAHqXOeR8IyXIjiUcJnJ1KeX_0C4Zu8Rdk';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
