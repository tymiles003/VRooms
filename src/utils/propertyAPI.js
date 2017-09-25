import axios from "axios";

const propertyAPI = {
    /**
     * Gets all properties from the database
     */
    getAllProperties: () => {
        return axios.get("/api/property");
    },

    /**
     * Searches the db for specific property
     */
    getProperty: propertyID => {
        console.log("reached " + propertyID);
        return axios.get("/api/property/" + propertyID);
    },

    /**
     * Get all properties of specific user
     */
    getAllUserProperties: userID => {
        axios.get("/api/user/" + userID).then(result => {
            return result.properties;
        });
    },

    /**
     *  Adds a new property to the specified user 
     */
    addNewProperty: (userID, property, cb) => {
        axios.post("/api/property/" + userID, property).then(response => {
            if (cb) {
                cb(response);
            } else {
                return response;
            }
        });
    },

    /**
     * Update an existing property
     */
    updateProperty: (propertyID, property) => {
        return axios.patch("/api/property/" + propertyID, property);
    }
};

export default propertyAPI;
