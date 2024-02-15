import axios from "axios";

export default class MainPageModel {
  static async getCoins(page) {
    const options = {
        params: {
            limit: '15',
            offset: (page - 1) * 15
        }
    }
    try {
      const res = await axios.get("https://api.coincap.io/v2/assets", options);
      return res.data.data
    } catch (error) {
      console.log(error);
    }
  }
}


// 3f9956d2-cb1c-4d51-9051-6b2392d17dfb
