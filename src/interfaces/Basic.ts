
/*
* This interface is used to define the basic information of the user.
* It is used in the BasicInfo component.
* @name: string
* @label: string
*/
export interface Basic {
    name: string;
    label: string;
    email: string;
    image: string;
    phone: string;
    url: string;
    summary: string;
    location: {
        address: string;
        postalCode: string;
        city: string;
        countryCode: string;
        region: string;
    };
    profiles: {
        icon: string;
        name: string;
        url: string;
    }[];

}