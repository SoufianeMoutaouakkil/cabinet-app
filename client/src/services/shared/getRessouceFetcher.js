import { getApiCaller } from "./getBackCaller";

export const getRessouceFetcher = (resource) => {
    const apiCaller = getApiCaller(resource);

    const getById = async ({ id, opts = {} }) => {
        return await apiCaller({ id, method: "GET", ...opts });
    };
    const getAll = async ({ opts = {} }) => {
        return await apiCaller({ method: "GET", ...opts });
    };
    const create = async ({ data, opts = {} }) => {
        data = { data };
        return await apiCaller({ method: "POST", data, ...opts });
    };
    const update = async ({ id, data, opts = {} }) => {
        data = { data };
        return await apiCaller({
            id,
            method: "PUT",
            data,
            ...opts,
        });
    };
    const remove = async ({ id, opts = {} }) => {
        return await apiCaller({ id, method: "DELETE", ...opts });
    };
    const search = async ({ query, opts = {} }) => {
        query = !query ? { field: "_id", operator: "exists" } : query;
        console.log("search: query: ", query);
        // parse query as stringquery
        if (typeof query === "object") {
            query = JSON.stringify(query);
            query = "query=" + encodeURIComponent(query);
        }
        opts.query = query;

        return await apiCaller({ method: "GET", ...opts });
    };
    const call = async (opts) => {
        return await apiCaller(opts);
    };

    return {
        getById,
        getAll,
        create,
        update,
        remove,
        search,
        call,
    };
};

export default getRessouceFetcher;
