const info = {
    key: "DWSRTUBHPKWDGKIQMO0QATTR2I43KYQBZ3TVCQ5NNQ1JF03Q",
    secret: "IU0FZU1DKGWXVBKWP3XR4MQZA3GVCZTEO0WN4EFHX2LNZLIR",
    place: "59.9473,30.2685"
  }

export const getLocations = () => {
    const {key, secret, place} = info;
    return new Promise((resolve,reject) => {
        fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${key}&client_secret=${secret}&v=20180826&ll=${place}&radius=150000&limit=40&categoryId=4d4b7104d754a06370d81259`)
        .then(response => 
            resolve(response.json())
        )
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}

export const searchLoca = (query) => {
    const {key, secret, place} = info;
    return new Promise((resolve,reject) => {
        fetch(`https://api.foursquare.com/v2/venues/search?client_id=${key}&client_secret=${secret}&v=20180826&ll=${place}&radius=150000&limit=40&categoryId=4d4b7104d754a06370d81259&query=${query}`)
        .then(response => 
            resolve(response.json())
        )
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}

export default {
    getLocations,
    searchLoca
}