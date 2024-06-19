"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentDto = exports.Status = void 0;
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["CANCELLED"] = "CANCELLED";
})(Status || (exports.Status = Status = {}));
var AppointmentDto = (function () {
    function AppointmentDto() {
    }
    return AppointmentDto;
}());
exports.AppointmentDto = AppointmentDto;
