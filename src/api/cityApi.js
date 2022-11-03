import axiosClient from "./axiosClient";
const module = "city";
const cityApi = {
    getAll(params) {
        const url = `/${module}/getall`;
        return axiosClient.get(url, {params});
    },

    get(id) {
        const url = `/${module}/getbyid/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/${module}/create`;
        return axiosClient.post(url, data);
    },

    update(id, data) {
        const url = `/${module}/update/${id}`;
        return axiosClient.put(url, data);
    },

    delete(id) {
        const url = `/${module}/delete/${id}`;
        return axiosClient.delete(url);
    }
}

export default cityApi;