
export class HttpUtil
{
    static FetchLogin(url)
    {
        return new Promise((resolve, reject) =>
        {
            fetch(url)
                .then(() =>
                {
                    resolve({ name: "zhang", age: 18 });
                })
                .catch((err) =>
                {
                    reject(err);
                })
        })
    }

    
}