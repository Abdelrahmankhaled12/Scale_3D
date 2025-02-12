const URL_API = import.meta.env.VITE_APP_SCALE_URL;


export const REGISTER_API = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(URL_API + "/v1/auth/signup", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// =========================================================================================
// =========================================================================================

export const LOGIN_API = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(URL_API + "/v1/auth/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch(error => {
                reject(error);
            });
    });
};


// =========================================================================================
// =========================================================================================

export const FORGET_PASS_API = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(URL_API + "/v1/auth/forget-pass", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// =========================================================================================
// =========================================================================================

export const RESET_PASS_API = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(URL_API + "/v1/auth/reset-pass", {
            headers: {
                "Authorization": `Bearer ${data.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch(error => {
                reject(error);
            });
    });
};


// =========================================================================================
// =========================================================================================


export const LOGOUT_API = async (data) => {
    return new Promise((resolve, reject) => {
        fetch(URL_API + "/v1/auth/logout", {
            headers: {
                "Authorization": `Bearer ${data._id}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => {
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch(error => {
                reject(error);
            });
    });
};

// =========================================================================================
// =========================================================================================

