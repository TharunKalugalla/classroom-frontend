import {createDataProvider, CreateDataProviderOptions} from "@refinedev/rest";
import {BACKEND_BASE_URL} from "@/constants";
import {ListResponse} from "@/types";

const options: CreateDataProviderOptions = {
    getList: {
        getEndpoint: ({resource}) => resource,

        mapResponse: async (response) => {
            try {
                const payload = await response.json() as ListResponse<any>;
                if (Array.isArray(payload)) return payload;
                return payload?.data ?? [];
            } catch (error) {
                console.error("Error mapping response:", error);
                return [];
            }
        },

        getTotalCount: async (response) => {
            try {
                const payload = await response.json() as ListResponse<any>;
                return payload?.pagination?.total ?? payload?.data?.length ?? (Array.isArray(payload) ? (payload as any).length : 0);
            } catch (error) {
                console.error("Error getting total count:", error);
                return 0;
            }
        }
    }
}

const {dataProvider} = createDataProvider(BACKEND_BASE_URL, options);

export {dataProvider};