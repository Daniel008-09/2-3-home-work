const button = document.getElementById('myButton');
    
button.addEventListener('click', () => {
console.log('Начало');
    
setTimeout(() => {
console.log('2 секунды прошло');
                    
setTimeout(() => {
console.log('3 секунды прошло');
}, 1000);
}, 2000);
});

const secondButton = document.getElementById('secondButton')

secondButton.addEventListener('click', () => {
    console.log('начало работы');

    setTimeout(() => {
        console.log('прошла 1 секунда');

        setTimeout(() => {
            console.log('прошло 2 секунды');

            setTimeout(() => {
                console.log('прошло еще 2 секунды');

                setTimeout(() => {
                    console.log('прошло еще 2 секунды');

                    setTimeout(() => {
                        console.log('прошло еще 2 секунды');

                        setTimeout(() => {
                            console.log('прошло 10 секунд с момента начало');
                        }, 1000)
                    }, 2000)
                }, 2000)
            }, 2000);
        }, 2000);
    }, 1000);
})
