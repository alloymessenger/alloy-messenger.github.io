const devServerURL = "http://localhost:8000";
const prodServerURL = "https://alloy-backend.herokuapp.com";
var serverURL;
var displayedMessages = [];
var inRoom = false;
var googleID;
var googleName;
var name;
var photoLink;
var googlePhoto;
var displayedCourse;  // The course ID of the assignments displayed in the sidebar;
var courseID;       // The course ID of the user's current chat room;
var assignmentID;
var courses = [];

if (document.location.href.includes("localhost")) {
    serverURL = devServerURL;
} else {
    serverURL = prodServerURL;
}