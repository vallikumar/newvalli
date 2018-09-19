export class FormData {
    reportedBy: string = '';
    facility: string = '';
    activity: string = '';
    covStartDate: string = '';
    covEndDate: string = '';
    repDate: string = '';
    lastName : string = '';
    email: string = '';
    work: string = '';
    sectwoa: string = '';
    alarm: string = '';
    mtd: string = '';
    safety: string = '';
    oth: string = '';
    secthreealarm = '';
    secthreemtd = '';
    secthreesafety = '';
    secthreeoth = '';
    secfour: string = '';
    secfive: string = '';

    clear() {
        this.reportedBy = '';
        this.facility= '';
        this.activity= '';
        this.covStartDate = '';
        this.covEndDate  = '';
        this.repDate = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.sectwoa = '';
        this.alarm = '';
        this.mtd = '';
        this.safety = '';
        this.oth = '';
        this.secthreealarm = '';
        this.secthreemtd = '';
        this.secthreesafety = '';
        this.secthreeoth = '';
        this.secfour = '';
        this.secfive = '';
    }
}

export class general {
    reportedBy: string = '';
    facility: string = '';
    activity: string = '';
    covStartDate: string ='';
    covEndDate: string ='';
    repDate: string ='';
    lastName : string = '';
    email: string = '';
}

export class Address {
    alarm: string = '';
    mtd: string = '';
    safety: string = '';
    oth: string = '';
}