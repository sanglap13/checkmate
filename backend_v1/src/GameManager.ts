import { WebSocket } from "ws";
import { INIT_GAME } from "./constants/messages";

interface IGame {
  id: number;
  name: string;
  player1: WebSocket;
  player2: WebSocket;
}

export class GameManager {
  private games: IGame[];
  private pendingUser: WebSocket;
  private users: WebSocket[];

  constructor() {
    this.games = [];
  }

  addUser(socket: WebSocket) {
    this.users.push(socket);
    this.addHandler(socket);
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter((user) => user !== socket);
  }

  private addHandler(socket: WebSocket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data.toString());

      if (message.type === INIT_GAME) {
        if (this.pendingUser) {
          //start game
        } else {
          this.pendingUser = socket;
        }
      }
    });
  }
}
