export interface Driver {
  database: string;
  password: string;
  port: number;

  connect():void
  disconnect():void
  isConnected(name:string):boolean;
};

// const driver: Driver = {
//   database: "",
//   password: "",
//   port: 8080,
//   connect: function (): void {
//   },
//   disconnect: function (): void {
//   },
//   isConnected: function (name: string): boolean {
//     throw new Error("Function not implemented.");
//   }
// } // esta es la manera tradicional que usabamos las interfaces en objetos


class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
  disconnect(): void {

  }

}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) { }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
  disconnect(): void {

  }
}


