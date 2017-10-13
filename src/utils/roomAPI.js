import axios from "axios";

const roomAPI = {
    /**
     * Gets all rooms from the database
     */
    getAllRooms: () => {
        return axios.get("/api/room");
    },

    /**
     * Searches the db for specific room
     */
    getRoom: roomID => {
        return axios.get("/api/room/" + roomID);
    },

    /**
     * Get all rooms of specific property
     */
    getAllRoomsInProperty: (propertyID, cb) => {
        axios.get("/api/property/" + propertyID).then(result => {
            cb(result.data[0].rooms);
        });
    },

    /**
     *  Adds a new room to the specified property 
     */
    addNewRoom: (propertyID, room) => {
        return axios.post("/api/room/" + propertyID, room);
    },

    /**
     * Add new annotation to the specified room
     */
    addNewAnnotation: (roomID, annotation) => {
        let update = {
            $push: { annotations: annotation }
        };
        return axios.patch("/api/room/" + roomID, update);
    }
};

export default roomAPI;
