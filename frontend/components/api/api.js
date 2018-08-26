import axios from '~/helpers/axios';

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const api = {
    login(username, password){
        return post('/api/login', {username: username, password: password});
    },
    logout(){
        return post('/api/logout');
    },
    whoami(){
        return get('/api/whoami');
    },
    add_msg(data){
        return post('/api/add_msg', {
            userId: data.user, 
            username: data.username, 
            first_name: data.name,
            picture: data.picture,
            msg: data.msg
        });
    },
    profile(username){
        return get('/api/username', {username});
    },
    edit_user(user){
        return post('/api/add_msg', {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: user.email,
            password: user.password  
        });
    },
    list_msg(){
        return get('/api/list_msg');
    }
}
export default api;

function get(url, params){
    return axios.get(url, {params: params});
}

function post(url, params){
    var fd = new FormData();
    params = params || {}
    Object.keys(params).map((k) => {
        fd.append(k, params[k]);
    })
    return axios.post(url, fd);
}
