import productos from "./mock";

export default function fetchData() {
    return new Promise(resolve => {
        console.log("esto funciona bien")
        setTimeout(() => {
            resolve(productos);
        }, 5000);
    });
};
