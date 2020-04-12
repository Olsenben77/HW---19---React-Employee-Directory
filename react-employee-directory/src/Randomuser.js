import axios from "axios";

function Randomuser() {
  return axios.get("https://randomuser.me/api/?results=100&nat=us");
}

export default Randomuser;
