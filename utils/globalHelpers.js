// const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const globalHelpers = {};

// globalHelpers.generateUUID = function () {
//     return uuidv4();
// };

globalHelpers.timeToMinutes = function (time) {
    const split = time.split(":");
    const hour = Number(split[0]);
    const minute = Number(split[1]);

    return hour * 60 + minute;
};

globalHelpers.concatenateName = function (payload) {
    const firstName = payload.firstName || "";
    const lastName = payload.lastName || "";
    const space = payload.lastName ? " " : "";

    return (
        firstName.charAt(0).toUpperCase() +
        firstName.slice(1) +
        space +
        lastName.charAt(0).toUpperCase() +
        lastName.slice(1)
    );
};

globalHelpers.handleMongooseError = function (response) {
    console.log(response)
    let returnResponse = {};

    if (typeof response === "string") {
        return { message: response };
    }

    if (response.name === "ValidationError") {
        const errorsArray = [];
        for (item in response.errors) {
            errorsArray.push(response.errors[item].message);
        }

        returnResponse.message = errorsArray;
    } else if ("message" in response) {
        returnResponse = { message: response.message };
    } else if (Array.isArray(response)) {
        returnResponse.message = response;
    }

    return returnResponse;
};

globalHelpers.isTrue = function (payload) {
    if (
        payload === "true" ||
        payload === "false" ||
        payload === true ||
        payload === false
    ) {
        return JSON.parse(payload) === true;
    }

    return false;
};

globalHelpers.toObjectId = function (id) {
    return new mongoose.Types.ObjectId(id);
};

globalHelpers.isFalse = function (payload) {
    if (
        payload === "true" ||
        payload === "false" ||
        payload === true ||
        payload === false
    ) {
        return JSON.parse(payload) === false;
    }

    return false;
};

globalHelpers.isValidObjectId = function (id) {
    return mongoose.Types.ObjectId.isValid(id);
};



module.exports = globalHelpers;
