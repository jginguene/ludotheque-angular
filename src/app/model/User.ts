export class User {

    name: string = '';
    firstName: string = '';
    emailAddress: string = '';
   
    id: number  ;

    constructor(aId: number, aName: string,  aFirstName: string, anEmailAddress) { 
        this.id = aId;
        this.name = aName;
        this.firstName = aFirstName;
        this.emailAddress = anEmailAddress;       
   }
} 