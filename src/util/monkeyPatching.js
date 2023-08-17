export function monkeyPatch() {
    const original = AMOCRM.router.navigate
    AMOCRM.router.navigate = (...args) => {
        const [pathname = ''] = args

        console.log(pathname);
        
        // if (pathname.match(/^\/leads\/detail\/\d+/)) {
        //     console.log('переход в карточку сделки')
        // } else if (pathname.match(/^\/leads\/pipeline\//)) {
        //     console.log('переход в воронку');
        // }

        return original.apply(this, args) 
    }

    console.log('patched');
}