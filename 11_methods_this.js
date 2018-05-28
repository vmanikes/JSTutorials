let myTodo = {
    day: "Mon",
    meetings: 0,
    meetingDone: 0,

    addMeeting: function () {
        // This modification is permanent
        this.meetings += 1;
    },

    resetMeeting: function () {
        this.meetings = 0;
    }
};

myTodo.addMeeting();

/*
{
  day: 'Mon',
  meetings: 1,
  meetingDone: 0,
  addMeeting: [Function: addMeeting]
}
  */
console.log(myTodo);
myTodo.resetMeeting();
console.log(myTodo);

