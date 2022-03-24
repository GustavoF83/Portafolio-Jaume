const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#sender')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event){
        event.preventDefault()
        const form =  new FormData(this)
        console.log(form.get('name'))
        $buttonMailto.setAttribute('href', `mailto:franco.gustavo01@gmail.com?subject=Nombre ${form.get('name')} - ${form.get('mail')}&body=${form.get('message')}`)
        $buttonMailto.click()
    }