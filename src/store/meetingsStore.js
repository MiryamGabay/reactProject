import { makeObservable, observable, action, runInAction, computed } from "mobx";

class MeetingsStore {

    baseUrl = 'http://localhost:8787/appointments'
    meetingsList = [];

    constructor() {
        makeObservable(this, {
            meetingsList: observable,
            initData: action,
            addMeeting: action
            //,
            // getMeetingsHistory: computed,
            // getNextMeetings: computed
        });
        this.initData();

    }

    async initData() {
        try {
            const res = await fetch(this.baseUrl);
            const data = await res.json;

            runInAction(() => {
                this.meetingsList = data
            });
        }
        catch (err) {
            console.log(err);
        }

    }

    async addMeeting(meeting) {
        try {
            const res = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(meeting)
            });
            const data = await res.json();
            console.log(data);
            this.meetingsList.push(data);
        }
        catch (error) {
            console.log(error)
        }
    }

    // get getMeetingsHistory(){
    //     const now = new Date();
    //     let pastMeetings = this.meetingsList.filter(x => x.dateTime < now);
    //     return pastMeetings.sort((a,b)=> b.dateTime - a.dateTime);
    // }

    // get getNextMeetings(){
    //     const now = new Date();
    //     let nextMeetings =  this.meetingsList.filter(x => x.dateTime >= now);
    //     return nextMeetings.sort((a,b)=> a.dateTime - b.dateTime);
    // }


}

const singleton = new MeetingsStore();
export default singleton;
