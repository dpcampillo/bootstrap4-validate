import Swal from 'sweetalert2';

export function infoMessage(title: string, message: string){
    return Swal.fire({
        title: title,
        text: message,
        type: "info"
    })
}

export function errorMessage(title: string, message: string){
    return Swal.fire({
        title: title,
        text: message,
        type: "error"
    })
}