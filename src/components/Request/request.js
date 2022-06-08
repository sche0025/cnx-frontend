export const requestFromBackend = (url, callback) =>{
    console.log('fetching...');
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if(data.error){
            alert(data.error);
            callback([]);
        }else if(data){
            const dataJson = JSON.parse(data);
            const dataList = Array.isArray(dataJson) ? dataJson : [dataJson]
            callback(dataList);
        }
    })
}