import http from "@/utils/httpRequest";

export function login(loginData: Object) {
    console.log(loginData);
    http.post("/api/api/system/auth/login", loginData)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}