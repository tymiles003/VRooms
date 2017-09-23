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
    getAllRoomsInProperty: propertyID => {
        axios.get("/api/property/" + propertyID, result => {
            return result.rooms;
        });
    },

    /**
     *  Adds a new room to the specified property 
     */
    addNewRoom: (propertyID, room) => {
        return axios.post("/api/room/" + propertyID, { room });
    }
};

export default roomAPI;
