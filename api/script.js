const categoryBaseUrl = '/api/script';

export const getScript = async () => {
    return await useHttp.get(`${categoryBaseUrl}`);
};

export const getScriptByNoToken = async () => {
    return await useHttp.get(`/auth/script`);
};

export const getScriptById = async (scriptId) => {
    return await useHttp.get(`${categoryBaseUrl}/${scriptId}`);
};

export const getScriptByIdNoToken = async (scriptId) => {
    return await useHttp.get(`/auth/script/${scriptId}`);
};

export const editScriptById = async (scriptId,data) => {
    return await useHttp.put(`${categoryBaseUrl}/${scriptId}`,data);
};

export const uploadFileById = async (scriptId,data) => {
    return await useHttp.post(`${categoryBaseUrl}/upload/${scriptId}`,data);
};

export const uploadDetail = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/detail`,data);
};

export const addOne = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}`,data);
};

export const uploadEnding = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/ending`,data);
};

export const downloadPDF = async (data) => {
    return await useHttp.post(`${categoryBaseUrl}/download/pdf`,data);
};