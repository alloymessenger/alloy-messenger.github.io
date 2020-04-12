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
var displayedChannel;  // The course ID of the rooms displayed in the sidebar;
var channelID;       // The course ID of the user's current chat room;
var roomID;
var courses = [];
var topics = [];
var unreadCount = 0;
var notificationsOn = false;

if (document.location.href.includes("localhost")) {
    serverURL = devServerURL;
} else {
    serverURL = prodServerURL;
}