import axios from "axios";

class ContentService {
  constructor() {
    this.apiHandler = axios.create({
      baseURL: "https://thatcopy.pw/catapi/rest/",
    });
  }

  getAll = () => this.apiHandler.get("/");
}

export default ContentService;
