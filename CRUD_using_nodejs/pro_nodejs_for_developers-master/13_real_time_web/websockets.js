// Opening WebSocket
//
// WebScoket() takes two arguments
// - first argument is URL that WebSocket will connect to
// - second argument - protcols
//
// URL is as usual but hte protocol is different. WebSockets use ws or wss protocol
// ws uses port 80
// wss uses port 443

// WebSocket(url, [protocols])


// Closing WebSocket
//
// socket.close([code], [reason])


// Checking the state of connection
// It's better to use constants than numbers
switch(socket.readyState) {
	case WebSocket.CONNECTING:
		// in connectiong state
		break;
	case WebSocket.OPEN:
		// in open state
		break;
	case WebSocket.CLOSING:
		// in closing state
		break;
	case WebSocket.CLOSED:
		// in closed state
		break;
	default:
		// this never happens
		break;
}
