export function makeFieldBackground(color) {
    const fields = document.querySelectorAll('.linked-form__field')
    console.log(fields);
    fields.forEach(el => el.style = `background: ${color};`)
} 

export function AddCardObserver() {
    const observerCallback = (mutationList, observer) => {
        mutationList.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.id === 'card_fields') {
                    makeFieldBackground('red')
                }
            })
        })

    }
    const observer = new MutationObserver(observerCallback)
    const target = document.getElementById('card_holder')
    const config = { childList: true }

    observer.observe(target, config)
} 