export class Profile {

    public version: string;
    public createdOn: number;
    public credentials: any[];
    public disclaimerAccepted: boolean;
    public onboardingCompleted: boolean;
    public checked: any;
    public checkedUA?: any;
    public dirty: boolean;
  
    constructor() {
      this.version = '1.0.0';
    }
  
    public create(opts?: any): Profile {
      opts = opts ? opts : {};
      let x = new Profile();
      x.createdOn = Date.now();
      x.credentials = opts.credentials || [];
      x.disclaimerAccepted = false;
      x.onboardingCompleted = false;
      x.checked = {};
      return x;
    };
  
    public fromObj(obj: any): Profile {
      let x = new Profile();
  
      x.createdOn = obj.createdOn;
      x.credentials = obj.credentials;
      x.disclaimerAccepted = obj.disclaimerAccepted;
      x.onboardingCompleted = obj.onboardingCompleted;
      x.checked = obj.checked || {};
      x.checkedUA = obj.checkedUA || {};
  
      if (x.credentials[0] && typeof x.credentials[0] != 'object')
        throw new Error("credentials should be an object");
      return x;
    };
  
    public fromString(str: string): Profile {
      return this.fromObj(JSON.parse(str));
    };
  
    public toObj(): string {
      delete this.dirty;
      return JSON.stringify(this);
    };
  }