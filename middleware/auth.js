export default function ({ store, redirect, route }) {
   // store.state.authUser != null && route.name == 'prijava' ? redirect('/home') : ''
   // store.state.authUser != null && route.name == 'registracija' ? redirect('/home') : ''
   //if(process.env.NODE_ENV === 'development'){return}
    store.state.authUser == null && isLoggedInRoute(route) ? redirect('/login') : ''
}

function isLoggedInRoute(route) {
    if (route.matched.some(record => record.path == '/main')) {
        return true
    }
    
    

}


//export default function ({ store, redirect }) {
   // if (store.getters['isLoggedIn']) {
    //    return redirect('/home')
   // }
//}