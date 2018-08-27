import AppApi from '~apijs'

export default function ({ store, redirect }) {
    if(store.state.logged_user === undefined){
        return AppApi.whoami().then((response) => {
            if(response.data.authenticated){
                store.commit('SET_LOGGED_USER', response.data.user);
            } else {
                store.commit('SET_LOGGED_USER', null);
                redirect('/login')
            }
        });
    }
}