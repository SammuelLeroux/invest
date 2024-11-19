export default class Tools {

    static getCookie = (name: string) => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies)
        {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name)
            {
                return decodeURIComponent(cookieValue);
            }
        }
        return '';
    };

    static setCookie = (name: string, item: string) => {

        //  creation d'un cookie
        let now: Date  = new Date();
        let time: number = now.getTime();
        let expireTime: number = time + 1000*36000;
        now.setTime(expireTime);
        document.cookie = `${name}=${item};expires=${now.toUTCString()}; path=/;SameSite=Lax`;

        // Déclencher l'événement de changement de cookie
        Tools.triggerCookieChangeEvent();
    }

    static editCookie = (cookieName: string, key: string, value: any) => {
        // Récupérer l'objet du cookie
        const currentObjectString = Tools.getCookie(cookieName);
        const currentObject = currentObjectString ? JSON.parse(currentObjectString) : {};
    
        // Ajouter le nouvel élément à l'objet
        currentObject[key] = value;
    
        // Convertir l'objet en chaîne JSON et définir le cookie avec la nouvelle valeur
        Tools.setCookie(cookieName, JSON.stringify(currentObject));

        // Déclencher l'événement de changement de cookie
        Tools.triggerCookieChangeEvent();
    }

    static triggerCookieChangeEvent = () => {
        const cookieChangeEvent = new Event('cookieChange');
        window.dispatchEvent(cookieChangeEvent);
    }
    
    static deleteCookie = (name: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

        // Déclencher l'événement de changement de cookie
        Tools.triggerCookieChangeEvent();
    }

    static deleteAllCookies = () => {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName] = cookie.trim().split('=');
            
            // Delete each cookie by setting its expiration date to the past
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

            // Déclencher l'événement de changement de cookie
            Tools.triggerCookieChangeEvent();
        }
    };
}