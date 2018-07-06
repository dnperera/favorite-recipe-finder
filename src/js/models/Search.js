import axios from "axios";
class Search {
  constructor(query) {
    this.query = query;
  }
  async getRecipes(str) {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const key = "d0bae227a6e9d58da98ac7250daa9380";
    const url = `${proxy}http://food2fork.com/api/search?key=${key}&q=${
      this.query
    }`;
    try {
      const results = await axios.get(url);
      this.recipes = results.data.recipes;
    } catch (err) {
      console.log(err);
    }
  }
}
export default Search;
