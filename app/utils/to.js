export default function to(promise) {
    return promise.then(data => {
        return [null, data]
    }, error => {
        return [error]
    })
}
