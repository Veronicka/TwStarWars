import Vue from 'vue'

var logged_user = null;
let listAll = [
        {
            id: 1,
            username: 'darth',
            password: '123',
            first_name: 'Darth',
            last_name: 'Vader',
            email: 'darh.gatinho@email.com',
            picture: 'https://nerdist.com/wp-content/uploads/2018/02/20180205_n_nerdistpresents_mastermind_vader_1x1-1.jpg',
            bg_img: 'https://i1.wp.com/wordofthenerdonline.com/wp-content/uploads/2018/01/04/Death-Star-wallpaper.png?fit=1920%2C804&ssl=1',
        },
        {
            id: 2,
            username: 'luke',
            password: '123',
            first_name: 'Luke',
            last_name: 'Skywalker',
            email: 'luke.jedi@email.com',
            picture: 'https://i.pinimg.com/736x/2b/90/b6/2b90b6ae31bd25f0a7e1a7da84c3bd75--movie-characters-temple.jpg',
            bg_img: 'https://i.imgur.com/0qQnv2v.jpg',
        },
]

let messages = [
    {
        id: 1, 
        userId: 1, 
        username: 'darth',
        first_name: 'Darth',
        picture: 'https://nerdist.com/wp-content/uploads/2018/02/20180205_n_nerdistpresents_mastermind_vader_1x1-1.jpg', 
        msg: 'I am your father!'
    },
    {
        id:2, 
        userId: 2, 
        username: 'luke', 
        first_name: 'Luke',
        picture: 'https://i.pinimg.com/736x/2b/90/b6/2b90b6ae31bd25f0a7e1a7da84c3bd75--movie-characters-temple.jpg',
        msg: 'Noooooooooooooooooooooooo!'
    }
]

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(username==="darth" && password==="123"){
            logged_user = listAll[0]
        }
        else if(username==="luke" && password==="1234"){
            logged_user = listAll[1]
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_msg(msg){
        msg.id = messages.length+1
        messages.push(msg)
        return mockasync({ msg });
    },
    edit_user(value){
        let ret = null;
        console.log(value)
        listAll.forEach((item) => {
          if(item.id === value.id){
            item.username = value.username
            item.first_name = value.username
            item.last_name = value.last_name
            item.email = value.email
            item.password = value.password
            ret = item
          }
        })
        return mockasync({ ret })    
    },
    profile(data){
        let list = []
        messages.forEach((item) => {
          if(item.username === data)
            list.push(item)
        })
        return mockasync({ list })
    },
    list_msg(){
        return mockasync({ messages });
    }
};

export default api;
