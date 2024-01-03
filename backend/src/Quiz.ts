interface Problems{
    title: string;
    description: string;
    image: string;
    answer: string;
}

export class Quiz{
    private roomId: string;
    private hasStarted: boolean;
    constructor(roomId: string){
        this.roomId = roomId;
        this.hasStarted = false;
        this.problems = []
    }
    start(){
        this.hasStarted = true;
    }
}