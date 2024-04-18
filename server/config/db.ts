let LOCAL = false

let HostName, URI;

if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost"
}else{
    URI = "mongodb+srv://jadenparris:Cupcake$101@cluster0.6neikt7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    HostName = "MongoDB Atlas"
}


export { HostName, URI }
export const SessionSecret = "INFT2202SessionSecret";