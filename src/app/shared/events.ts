export class Event{
    SNo: String;
    Event_id: String;
    IndexPageFeatured: boolean;
    Event_Name: String;
    Event_date: String;
    Event_info: String;
    Event_pics: String[];
    Exp: exp[];
}

class exp{
    Author: String;
    Date: String;
    comment: String;
}