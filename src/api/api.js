var axios = require("axios");
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
const ApiService = {
    get(apiurl) {
        return axios
            .get(apiurl)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },

    post(apiurl, bodyFormData) {
        return axios
            .post(apiurl, bodyFormData)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },

    put(apiurl, bodyFormData) {
        return axios
            .put(apiurl, bodyFormData)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },
    delete(apiurl, bodyFormData) {
        return axios
            .delete(apiurl)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    }
};
export default ApiService;

export const videoModule = {
    videolist() {
        return ApiService.get("http://localhost:4600/media/");
    },
    // mostlikedpost() {
    //     return ApiService.get("http://localhost:4600/posts/mostlikedpost/");
    // },
    // selectedBlog(blog) {
    //     return ApiService.get("http://localhost:4600/posts/" + blog);
    // },

    // addBlog(blog) {
    //     return ApiService.post("http://localhost:4600/posts/", blog);
    // },

    // updateBlog(blog, blogid) {
    //     return ApiService.put("http://localhost:4600/posts/" + blogid, blog);
    // },

    // deleteBlog(blog) {
    //     return ApiService.delete("http://localhost:4600/posts/" + blog);
    // }
};

